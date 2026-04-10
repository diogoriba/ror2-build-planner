const target = document.querySelector("div.selection-items");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 150;

// Create video stream
const stream = canvas.captureStream(2);

const pipContainer = document.createElement("div");
pipContainer.style.textAlign = "right";
pipContainer.style.position = "fixed";
pipContainer.style.bottom = "10px";
pipContainer.style.right = "10px";
pipContainer.style.width = "200px";

const pipBtn = document.createElement("button");
pipBtn.id = "pipBtn";
pipBtn.textContent = "Overlay";

const video = document.createElement("video");
video.srcObject = stream;
video.muted = true;
video.playsInline = true;
video.controls = true;
video.style.width = "100%";

pipContainer.appendChild(pipBtn);
pipContainer.appendChild(video);
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
    if (target.offsetWidth === 0 || target.offsetHeight === 0) {
      rendering = false;
      return;
    }

    const snapshot = await html2canvas(target, {
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
    if (canvas.width !== snapshot.width || canvas.height !== snapshot.height) {
      canvas.width = snapshot.width;
      canvas.height = snapshot.height;
    }

    // background (not white)
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(snapshot, 0, 0);

  } catch (e) {
    console.warn("Render error:", e);
  }

  rendering = false;
}

// ---------- PiP HANDLING ----------
let attemptingPiP = false;
pipBtn.onclick = async () => {
  try {
    if (attemptingPiP) {
        return;
    }
    attemptingPiP = true;
    await video.play();

    // ✅ Safeguard for unsupported browsers (Firefox, etc.)
    if ("pictureInPictureEnabled" in document && video.requestPictureInPicture) {
      await video.requestPictureInPicture();
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

// -------- INTERVAL DRIVER --------
setInterval(renderLoop, FRAME_TIME);
