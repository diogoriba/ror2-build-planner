window.pipInitialized = false;
window.pipTarget = document.querySelector("div.selection-items");
window.pipCanvas = null;
window.pipContext = null;
window.pipVideo = null;
const pipContainer = document.createElement("div");
pipContainer.style.textAlign = "right";
pipContainer.style.position = "fixed";
pipContainer.style.bottom = "10px";
pipContainer.style.right = "10px";
pipContainer.style.width = "350px";

const pipBtn = document.createElement("button");
pipBtn.id = "pipBtn";
pipBtn.textContent = "Overlay";

pipContainer.appendChild(pipBtn);
document.body.appendChild(pipContainer);

// -------- SETTINGS --------
const FPS = 5;
const FRAME_TIME = 1000 / FPS;

let rendering = false;

// -------- MAIN LOOP --------
async function renderLoop() {
  if (rendering) return; // prevent overlap
  rendering = true;

  try {
    if (window.pipTarget.offsetWidth === 0 || window.pipTarget.offsetHeight === 0) {
      rendering = false;
      return;
    }

    const snapshot = await html2canvas(window.pipTarget, {
      backgroundColor: null,
      useCORS: true,
      logging: false,
      scale: 1.2
    });

    if (!snapshot || snapshot.width === 0) {
      rendering = false;
      return;
    }

    // resize only if needed (important)
    if (window.pipCanvas.width !== snapshot.width || window.pipCanvas.height !== snapshot.height) {
      window.pipCanvas.width = snapshot.width;
      window.pipCanvas.height = snapshot.height;
    }

    // background (not white)
    window.pipContext.fillStyle = "#121212";
    window.pipContext.fillRect(0, 0, window.pipCanvas.width, window.pipCanvas.height);

    window.pipContext.drawImage(snapshot, 0, 0);

  } catch (e) {
    console.warn("Render error:", e);
  }

  rendering = false;
}

function initializePiP() {
    window.pipCanvas  = document.createElement("canvas");
    window.pipContext = window.pipCanvas.getContext("2d");

    window.pipCanvas.width = 300;
    window.pipCanvas.height = 150;

    // Create video stream
    const stream = window.pipCanvas.captureStream(2);
    window.pipVideo = document.createElement("video");
    window.pipVideo.srcObject = stream;
    window.pipVideo.muted = true;
    window.pipVideo.playsInline = true;
    window.pipVideo.controls = true;
    window.pipVideo.style.width = "100%";

    pipContainer.appendChild(window.pipVideo);

    setInterval(renderLoop, FRAME_TIME);
}


// ---------- PiP HANDLING ----------
let attemptingPiP = false;
pipBtn.onclick = async () => {
  try {
    if (!window.pipInitialized) {
        initializePiP();
        window.pipInitialized = true;
    }
    if (attemptingPiP) {
        return;
    }
    attemptingPiP = true;
    await window.pipVideo.play();

    // ✅ Safeguard for unsupported browsers (Firefox, etc.)
    if ("pictureInPictureEnabled" in document && window.pipVideo.requestPictureInPicture) {
      await window.pipVideo.requestPictureInPicture();
    } else {
      console.warn("PiP API not supported. Use manual PiP via video controls.");
      alert("PiP not supported in this browser.\nYou can try right-clicking the video on the bottom right corner and choosing the Picture in Picture option.");
    }
  } catch (e) {
    console.error("PiP failed:", e);
  } finally {
    attemptingPiP = false;
  }
};
