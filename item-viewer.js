const content = document.getElementById('content');
const tooltip = document.getElementById('tooltip');
const tapLength = 250; // in milliseconds
const tapDistance = 25; // in pixels
const categoryOrder = [
  'COMMON',
  'UNCOMMON',
  'LEGENDARY',
  'UNIQUE',
  'EQUIPMENT',
  'LUNAR',
  'VOID',
  'MEAL',
  'HALLOWED',
  'HEX',
  'PAGE'
];
const expansionIconMap = {
  'Alloyed Collective': 'alloyedCollective',
  'Hallowed Concepts': 'hallowedConcepts',
  'Seekers of the Storm': 'seekersOfTheStorm',
  'Survivors of the Void': 'survivorsOfTheVoid'
};

window.supportsHover = window.matchMedia("(hover: hover)").matches;


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setLocalImageSource(imageElement, imageName, extensions = ['webp', 'jpg', 'png']) {
  let extensionIndex = 0;

  function loadNextFormat() {
    if (extensionIndex >= extensions.length) {
      imageElement.onerror = null;
      return;
    }
    imageElement.src = `public/img/${imageName}.${extensions[extensionIndex]}`;
    extensionIndex += 1;
  }

  imageElement.onerror = loadNextFormat;
  loadNextFormat();
}

function renderToken(token) {
  const content = token.slice(1, -1);
  const match = content.match(/^([^:]+):([\s\S]*)$/);
  if (match) {
    const type = match[1].trim().toLowerCase();
    const label = match[2].trim();
    const bubbleType = /^(offense|defense|misc|debuff|corrupt)$/i.test(type) ? type.toLowerCase() : 'extra';
    return `<span class="bubble bubble--${bubbleType}">${escapeHtml(label)}</span>`;
  }
  return `<span class="bubble bubble--extra">${escapeHtml(content)}</span>`;
}

function formatDescription(text) {
  if (!text) return '';
  return String(text)
    .split(/(\{[^}]+\})/)
    .map(fragment => {
      if (!fragment) return '';
      if (fragment.startsWith('{') && fragment.endsWith('}')) {
        return renderToken(fragment);
      }
      return escapeHtml(fragment).replace(/\n/g, '<br>');
    })
    .join('');
}

function renderRecipeIcons(recipe) {
  if (!recipe || !recipe.base?.length || !recipe.options?.length) return '';

  const renderIcon = ({ image, name }) => `
    <div class="tooltip-recipe-icon" title="${escapeHtml(name)}">
      <img src="public/img/${image}.webp" alt="${escapeHtml(name)}" onerror="this.src='public/img/${image}.jpg'" />
    </div>
  `;

  const baseIcons = recipe.base.map(renderIcon).join('');
  const optionIcons = recipe.options.map(renderIcon).join('');

  return `
    <div class="tooltip-recipe">
      <div class="tooltip-recipe-group">${baseIcons}</div>
      <div class="tooltip-recipe-operator">+</div>
      <div class="tooltip-recipe-group tooltip-recipe-options">${optionIcons}</div>
    </div>
  `;
}

function getCategoryLabel(name) {
  const key = String(name).trim().toLowerCase();
  if (key.includes('uncommon')) return 'Uncommon';
  if (key.includes('common')) return 'Common';
  if (key.includes('legendary')) return 'Legendary';
  if (key.includes('hallowed')) return 'Hallowed';
  if (key.includes('hex')) return 'Hex';
  if (key.includes('page')) return "N'tormat Pages";
  if (key.includes('unique')) return 'Unique';
  if (key.includes('void') || key.includes('corrupted')) return 'Void';
  if (key.includes('meal')) return 'Meal';
  if (key.includes('lunar')) return 'Lunar';
  if (key.includes('equip')) return 'Equipment';
  return String(name);
}

function getCategoryRank(name) {
  const rank = categoryOrder.indexOf(String(name).toUpperCase());
  return rank === -1 ? 99 : rank;
}

function render() {
  itemsByRarity.sort((a, b) => getCategoryRank(a.rarity) - getCategoryRank(b.rarity) || a.rarity.localeCompare(b.rarity));
  const sectionStates = [];
  const globalSelectionOrder = [];
  draggedKey = null;
  let draggedSection = null;

  function createItemCard(item, onAdd) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'item-card';
    card.dataset.itemKey = getSelectionKey(item);
    card.dataset.expansion = item.expansion || '';
    const itemIcon = document.createElement('img');
    itemIcon.loading = 'lazy';
    itemIcon.alt = item.name;
    setItemImageSource(itemIcon, item);
    card.appendChild(itemIcon);

    const badgeIcon = expansionIconMap[item.expansion];
    if (badgeIcon) {
      const badge = document.createElement('span');
      badge.className = 'item-card-badge';
      badge.title = item.expansion;
      const badgeImage = document.createElement('img');
      badgeImage.loading = 'lazy';
      badgeImage.alt = item.expansion;
      setLocalImageSource(badgeImage, badgeIcon);
      badge.appendChild(badgeImage);
      card.appendChild(badge);
    }

    if (window.supportsHover) {
      card.onclick = () => onAdd(item);
      card.onpointerenter = event => showTooltip(event, item);
      card.onpointermove = event => moveTooltip(event);
      card.onpointerleave = hideTooltip;
    } else {
      card.ontouchstart = (e) => {
        card.touchStartTime = Date.now();
        card.posX = e.touches[0].clientX;
        card.posY = e.touches[0].clientY;
      }
      card.ontouchend = (e) => { 
        const timeDiff = Date.now() - card.touchStartTime;
        const posX = e.changedTouches[0].clientX;
        const posY = e.changedTouches[0].clientY;
        const xDiff = posX - card.posX;
        const yDiff = posY - card.posY;
        const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        if (!draggedKey && timeDiff <= tapLength && distance < tapDistance)
          showModal(item);
      };
    }
    return card;
  }

  function showTooltip(event, item) {
    // Don't show tooltip if we're currently dragging
    if (draggedKey) return;
    
    const recipeHtml = item.recipe ? `
      <div class="recipe-title">Crafted with</div>
      ${renderRecipeIcons(item.recipe)}
    ` : '';

    tooltip.innerHTML = `
      <h3>${escapeHtml(item.name)}</h3>
      <div class="description">${formatDescription(item.description)}</div>
      ${recipeHtml}
    `;
    tooltip.classList.add('visible');
    tooltip.setAttribute('aria-hidden', 'false');
    moveTooltip(event);
  }

  function moveTooltip(event) {
    const padding = 14;
    const tooltipWidth = 320; // max-width from CSS
    const tooltipHeight = tooltip.offsetHeight || 200; // fallback height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let left = event.clientX + padding;
    let top = event.clientY + padding;
    
    // Check horizontal positioning
    if (left + tooltipWidth > viewportWidth) {
      // Try positioning to the left of cursor
      left = event.clientX - tooltipWidth - padding;
      // If that would go off-screen to the left, center it horizontally
      if (left < 0) {
        left = Math.max(0, (viewportWidth - tooltipWidth) / 2);
      }
    }
    
    // Check vertical positioning
    if (top + tooltipHeight > viewportHeight) {
      // Position above cursor if it would go off-screen at bottom
      top = event.clientY - tooltipHeight - padding;
      // If that would go off-screen at top, position below cursor
      if (top < 0) {
        top = event.clientY + padding;
      }
    }
    
    // Ensure tooltip stays within viewport bounds
    left = Math.max(0, Math.min(left, viewportWidth - tooltipWidth));
    top = Math.max(0, Math.min(top, viewportHeight - tooltipHeight));
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  function hideTooltip() {
    tooltip.classList.remove('visible');
    tooltip.setAttribute('aria-hidden', 'true');
  }

  // Search and filter state
  let searchQuery = '';
  let selectedTags = new Set();

  // Available tags for filtering
  const availableTags = [
    'defensive', 'crit', 'proc', 'status', 'summon', 'economy', 'aoe',
    'on kill', 'raw damage', 'movement', 'cooldown', 'electric', 'hp%', 'execute',
  ].sort();

  const availableExpansions = Array.from(
    new Set(itemsByRarity.flatMap(group =>
      group.items.map(item => item.expansion || '')
    ))
  )
    .filter(expansion => expansion);

  // Custom sort order for expansion filters
  const expansionOrder = ['Survivors of the Void', 'Seekers of the Storm', 'Alloyed Collective', 'Hallowed Concepts'];
  availableExpansions.sort((a, b) => {
    const indexA = expansionOrder.indexOf(a);
    const indexB = expansionOrder.indexOf(b);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });
  const visibleExpansions = new Set(availableExpansions);
  const itemByKey = new Map(itemsByRarity.flatMap(group =>
    group.items.map(item => [getSelectionKey(item), item])
  ));
  const itemCategoryByKey = new Map(itemsByRarity.flatMap(group =>
    group.items.map(item => [getSelectionKey(item), group.rarity])
  ));
  const rarityBackgrounds = {
    HALLOWED: 'BgHallowed',
    HEX: 'BgHex',
    PAGE: 'BgPage',
    LUNAR: 'BgLunar',
    EQUIPMENT: 'BgEquipment'
  };
  const itemKeyToSectionState = new Map();

  function getSelectionKey(item) {
    return `${item.id}`;
  }

  function setItemImageSource(imageElement, item) {
    const imageFormats = item.expansion === 'Hallowed Concepts' ? ['png'] : undefined;
    setLocalImageSource(imageElement, item.image, imageFormats);

    if (item.expansion !== 'Hallowed Concepts') return;
    const background = rarityBackgrounds[itemCategoryByKey.get(getSelectionKey(item))];
    if (!background) return;

    imageElement.style.backgroundImage = `url("public/img/${background}.png")`;
    imageElement.style.backgroundPosition = 'center';
    imageElement.style.backgroundRepeat = 'no-repeat';
    imageElement.style.backgroundSize = 'contain';
  }

  function insertGlobalEntry(sectionState, key) {
    window.pipDirty = true;
    if (globalSelectionOrder.some(entry => entry.sectionState === sectionState && entry.key === key)) return;
    const sectionIndexes = [];
    for (let i = 0; i < globalSelectionOrder.length; i++) {
      if (globalSelectionOrder[i].sectionState === sectionState) sectionIndexes.push(i);
    }
    if (sectionIndexes.length) {
      globalSelectionOrder.splice(sectionIndexes[sectionIndexes.length - 1] + 1, 0, { sectionState, key });
      return;
    }
    let insertAt = globalSelectionOrder.length;
    const sectionIndex = sectionStates.indexOf(sectionState);
    for (let i = 0; i < globalSelectionOrder.length; i++) {
      if (sectionStates.indexOf(globalSelectionOrder[i].sectionState) > sectionIndex) {
        insertAt = i;
        break;
      }
    }
    globalSelectionOrder.splice(insertAt, 0, { sectionState, key });
  }

  function removeGlobalEntry(key) {
    window.pipDirty = true;
    for (let i = globalSelectionOrder.length - 1; i >= 0; i--) {
      if (globalSelectionOrder[i].key === key) globalSelectionOrder.splice(i, 1);
    }
  }

  function moveGlobalEntry(key, targetKey) {
    window.pipDirty = true;
    const currentIndex = globalSelectionOrder.findIndex(entry => entry.key === key);
    const targetIndex = globalSelectionOrder.findIndex(entry => entry.key === targetKey);
    if (currentIndex === -1 || targetIndex === -1 || currentIndex === targetIndex) return;
    
    const movingRight = currentIndex < targetIndex;
    const [entry] = globalSelectionOrder.splice(currentIndex, 1);
    
    // Find target's position after removal (indices have shifted)
    const newTargetIndex = globalSelectionOrder.findIndex(e => e.key === targetKey);
    
    // Insert after target when moving right, before when moving left
    const insertPos = movingRight ? newTargetIndex + 1 : newTargetIndex;
    globalSelectionOrder.splice(insertPos, 0, entry);
  }

  function attachDragHandlers(tile, sectionState, key) {
    tile.draggable = true;
    tile.dataset.selectionKey = key;
    tile.dataset.sectionIndex = String(sectionStates.indexOf(sectionState));

    if (window.supportsHover) {
      tile.onpointerdown = event => {
        if (event.button !== 0) return; // Only left mouse button
        draggedKey = key;
        draggedSection = sectionState;
      };

      tile.onpointerup = event => {
        if (event.button !== 0) return;
        draggedKey = null;
        draggedSection = null;
      }

      tile.ondragstart = event => {
        draggedKey = key;
        draggedSection = sectionState;
        tile.classList.add('dragging');
      };

      tile.ondragend = () => {
        tile.classList.remove('dragging');
        draggedKey = null;
        draggedSection = null;
      };

      tile.ondragover = event => {
        if (draggedKey) {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
        }
      };

      tile.ondrop = event => {
        event.preventDefault();
        if (!draggedKey || draggedSection !== sectionState) return;
        const targetKey = key;
        if (targetKey === draggedKey) return;
        moveGlobalEntry(draggedKey, targetKey);
        refreshAllSelections();
        draggedKey = null;
      };
    }
  }

  function refreshGlobalSelection() {
    globalSelectionItems.innerHTML = '';
    let hasAny = false;
    globalSelectionOrder.forEach(entry => {
      const state = entry.sectionState;
      const current = state.selectedMap.get(entry.key);
      if (!current) return;
      hasAny = true;
      const tile = document.createElement('div');
      tile.className = 'selection-item';
      const itemIcon = document.createElement('img');
      itemIcon.alt = current.item.name;
      setItemImageSource(itemIcon, current.item);
      tile.appendChild(itemIcon);
      const count = document.createElement('div');
      count.className = 'selection-count';
      count.textContent = current.count;
      tile.appendChild(count);
      
      if (window.supportsHover) {
        tile.onclick = () => {
          current.count -= 1;
          if (current.count <= 0) {
            state.selectedMap.delete(entry.key);
            removeGlobalEntry(entry.key);
          }
          state.refreshSelection();
          refreshGlobalSelection();
          window.pipDirty = true;
          draggedKey = null;
        };
        tile.onpointerenter = event => showTooltip(event, current.item);
        tile.onpointermove = event => moveTooltip(event);
        tile.onpointerleave = hideTooltip;
      } else {
        tile.ontouchstart = (e) => {
          tile.touchStartTime = Date.now();
          tile.posX = e.touches[0].clientX;
          tile.posY = e.touches[0].clientY;
        }
        tile.ontouchend = (e) => { 
          const timeDiff = Date.now() - tile.touchStartTime;
          const posX = e.changedTouches[0].clientX;
          const posY = e.changedTouches[0].clientY;
          const xDiff = posX - tile.posX;
          const yDiff = posY - tile.posY;
          const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
          if (!draggedKey && timeDiff <= tapLength && distance < tapDistance)
            showModal(current.item);
        };
      }
      attachDragHandlers(tile, state, entry.key);
      globalSelectionItems.appendChild(tile);
    });
    globalSelectionEmpty.style.display = hasAny ? 'none' : 'block';
    if (hasAny) {
      globalSelectionItems.classList.remove('hidden');
    } else {
      globalSelectionItems.classList.add('hidden');
    }
    refreshUrlHash();
  }

  function refreshAllSelections() {
    sectionStates.forEach(state => state.refreshSelection());
    refreshGlobalSelection();
  }

  function showModal(item) {
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalIcon = modal.querySelector('.modal-icon');
    const modalDescription = modal.querySelector('.modal-description');
    const modalRecipe = modal.querySelector('.modal-recipe');
    const modalCloseButton = modal.querySelector('#modal-close-button');
    const modalCloseButton2 = modal.querySelector('#modal-close-button2');
    const modalDeletetionButton = modal.querySelector('#modal-deletion-button');
    const modalMinusButton = modal.querySelector('#modal-minus-button');
    const modalPlusButton = modal.querySelector('#modal-plus-button');
    const modalCountDisplay = modal.querySelector('.modal-quantity-input');
    const modalMoveLeft = modal.querySelector('#modal-move-left');
    const modalMoveRight = modal.querySelector('#modal-move-right');
    globalSelectionBox.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    const key = getSelectionKey(item);
    const sectionState = itemKeyToSectionState.get(key);
    const selectedMap = sectionState.selectedMap;
    
    modal.classList.add('visible');
    modalTitle.textContent = item.name;
    setItemImageSource(modalIcon, item);
    modalDescription.innerHTML = formatDescription(item.description);
    modalRecipe.innerHTML = item.recipe ? `<div class="recipe-title">Crafted with</div>${renderRecipeIcons(item.recipe)}` : '';
    function updateCountDisplay() {
      modalCountDisplay.value = selectedMap.get(key)?.count || 0;
    }
    function changeValue(newValue) {
      const currentValue = selectedMap.get(key)?.count || 0;
      selectedMap.set(key, { item, count: newValue } );
      if (newValue <= 0) {
        selectedMap.delete(key);
      }
      if (currentValue == 0 && newValue > 0) {
        insertGlobalEntry(sectionState, key);
      }
      if (currentValue > 0 && newValue <= 0) {
        removeGlobalEntry(key);
      }
      updateCountDisplay();
      refreshAllSelections();
    }
    function increment() {
      const currentValue = selectedMap.get(key)?.count || 0;
      changeValue(currentValue + 1);
    }
    function decrement() {
      const currentValue = selectedMap.get(key)?.count || 0;
      changeValue(currentValue - 1);
    }
    function updateFromCountInput() {
      changeValue(modalCountDisplay.valueAsNumber || 0);
    }
    function move(incr) {
      const itemIndex = globalSelectionOrder.findIndex(entry => entry.key === key);
      const previousIndex = itemIndex + incr;
      if (previousIndex >= 0 && previousIndex < globalSelectionOrder.length) {
        const previousItem = globalSelectionOrder[previousIndex];
        if (previousItem && previousItem.sectionState.id === sectionState.id) {
          moveGlobalEntry(key, previousItem.key);
          refreshAllSelections();
        }
      }
    }
    function moveLeft() {
      move(-1);
    }
    function moveRight() {
      move(1);
    }
    modalCloseButton.ontouchstart = (e) => { e.preventDefault(); modal.classList.remove('visible'); globalSelectionBox.classList.remove('modal-open'); document.body.style.overflow = ''; refreshGlobalSelection(); };
    modalCloseButton2.ontouchstart = modalCloseButton.ontouchstart;
    modalDeletetionButton.ontouchstart = (e) => { e.preventDefault(); modal.classList.remove('visible'); globalSelectionBox.classList.remove('modal-open'); document.body.style.overflow = ''; changeValue(0); };
    modalMinusButton.ontouchstart = (e) => { e.preventDefault(); decrement(); };
    modalPlusButton.ontouchstart = (e) => { e.preventDefault(); increment(); };
    modalCountDisplay.onchange = (e) => { e.preventDefault(); updateFromCountInput(); };
    modalMoveLeft.ontouchstart = (e) => { e.preventDefault(); moveLeft(); }
    modalMoveRight.ontouchstart = (e) => { e.preventDefault(); moveRight(); }
    updateCountDisplay();
  }

  const globalSelectionBox = document.createElement('div');
  globalSelectionBox.className = 'global-selection-box';
  globalSelectionBox.innerHTML = '<h2>Selected items</h2><div class="selection-items"></div><div class="selection-empty">Click items to add them here</div>';
  function setDirtyOnResize() {
    window.pipDirty = true;
  }
  document.body.onresize = setDirtyOnResize;
  new ResizeObserver(setDirtyOnResize).observe(globalSelectionBox);
  
  const globalSelectionItems = globalSelectionBox.querySelector('.selection-items');
  const globalSelectionEmpty = globalSelectionBox.querySelector('.selection-empty');
  globalSelectionItems.classList.add('hidden');
  globalSelectionEmpty.style.display = 'block';

  // Create search section
  const searchSection = document.createElement('div');
  searchSection.className = 'search-section';
  searchSection.innerHTML = `
    <div class="search-controls">
      <input type="text" class="search-input" placeholder="Search item names..." />
      <div class="tag-filter">
        <div class="tag-dropdown">
          <button type="button" class="tag-dropdown-button">All tags (clear filters)</button>
          <div class="tag-dropdown-menu" aria-label="Tag filter menu">
            <div class="tag-dropdown-item" data-value="">
              <span class="tag-prefix"></span>
              <span class="tag-label">All tags (clear filters)</span>
            </div>
            ${availableTags.map(tag => `
              <div class="tag-dropdown-item" data-value="${tag}">
                <span class="tag-prefix"></span>
                <span class="tag-label">${tag}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <button type="button" class="clear-selection-button">Clear selection</button>
    </div>
    <div class="expansion-filters">
      <span class="expansion-label">Show expansions:</span>
      ${availableExpansions.map(expansion => {
        const icon = expansionIconMap[expansion];
        return `
        <label class="expansion-option">
          <input type="checkbox" value="${escapeHtml(expansion)}" checked />
          <span>
            ${icon ? `<img data-image="${escapeHtml(icon)}" alt="${escapeHtml(expansion)}" />` : ''}
            ${escapeHtml(expansion)}
          </span>
        </label>
        `;
      }).join('')}
    </div>
  `;

  content.parentNode.insertBefore(searchSection, content);
  content.parentNode.insertBefore(globalSelectionBox, content);
  searchSection.querySelectorAll('.expansion-option img').forEach(image => {
    setLocalImageSource(image, image.dataset.image);
  });

  // Get search elements
  const searchInput = searchSection.querySelector('.search-input');
  const tagDropdown = searchSection.querySelector('.tag-dropdown');
  const tagDropdownButton = searchSection.querySelector('.tag-dropdown-button');
  const tagDropdownMenu = searchSection.querySelector('.tag-dropdown-menu');
  const tagDropdownItems = Array.from(searchSection.querySelectorAll('.tag-dropdown-item'));
  const expansionCheckboxes = Array.from(searchSection.querySelectorAll('.expansion-option input'));
  const clearSelectionButton = searchSection.querySelector('.clear-selection-button');

  // Search and filter functions
  function matchesSearch(item) {
    if (!searchQuery) return true;
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  }

  function matchesTags(item) {
    if (selectedTags.size === 0) return true;
    return item.tags && item.tags.some(tag => selectedTags.has(tag));
  }

  function matchesExpansion(item) {
    const expansion = item.expansion || '';
    return expansion === '' || visibleExpansions.has(expansion);
  }

  function shouldShowItem(item) {
    return matchesExpansion(item);
  }

  function shouldDimItem(item) {
    const matchTags = matchesTags(item) && selectedTags.size > 0;
    const matchSearch = matchesSearch(item) && searchQuery;
    return (selectedTags.size > 0 || searchQuery) && !(matchTags || matchSearch);
  }

  function updateTagOptionLabels() {
    tagDropdownItems.forEach(item => {
      const value = item.dataset.value;
      const prefix = item.querySelector('.tag-prefix');
      if (!value) {
        prefix.textContent = selectedTags.size === 0 ? '✔' : '';
      } else {
        prefix.textContent = selectedTags.has(value) ? '✔' : '';
      }
      item.classList.toggle('selected', value ? selectedTags.has(value) : selectedTags.size === 0);
    });

    if (selectedTags.size === 0) {
      tagDropdownButton.textContent = 'All tags (clear filters)';
    } else if (selectedTags.size === 1) {
      tagDropdownButton.textContent = `✔ ${Array.from(selectedTags)[0]}`;
    } else {
      tagDropdownButton.textContent = `✔ ${selectedTags.size} tags`;
    }
  }

  function base64Encode(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 1) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  function base64Decode(encoded) {
    const binary = atob(encoded);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function serializeSelection() {
    const entries = globalSelectionOrder.map(entry => {
      const selection = entry.sectionState.selectedMap.get(entry.key);
      if (!selection) return null;
      return `${entry.key}:${selection.count}`;
    }).filter(Boolean);
    return entries.length ? base64Encode(entries.join(',')) : '';
  }

  function setUrlHash(hashValue) {
    const newHash = hashValue ? `#${hashValue}` : '';
    const nextUrl = `${window.location.pathname}${window.location.search}${newHash}`;
    if (window.location.href !== nextUrl) {
      history.replaceState(null, '', nextUrl);
    }
  }

  function refreshUrlHash() {
    setUrlHash(serializeSelection());
  }

  function updateFilters() {
    searchQuery = searchInput.value.trim();
    applyFilters();
    updateTagOptionLabels();
  }

  function clearEntireSelection() {
    if (!globalSelectionOrder.length) return;
    if (!window.confirm('Clear the entire selection? This will also clear tag filters.')) return;
    selectedTags.clear();
    updateFilters();
    sectionStates.forEach(state => state.selectedMap.clear());
    globalSelectionOrder.length = 0;
    refreshAllSelections();
  }

  function restoreSelectionFromHash(hash) {
    if (!hash) return;
    let decoded;
    try {
      decoded = base64Decode(hash);
    } catch {
      return;
    }
    const entries = decoded.split(',');
    const seenIds = new Set();
    entries.forEach(entry => {
      const separatorIndex = entry.lastIndexOf(':');
      if (separatorIndex === -1) return;
      const id = entry.slice(0, separatorIndex);
      const countValue = entry.slice(separatorIndex + 1);
      const count = Number(countValue);
      if (!id || !Number.isInteger(count) || count <= 0 || seenIds.has(id)) return;
      const item = itemByKey.get(id);
      const sectionState = itemKeyToSectionState.get(id);
      if (!item || !sectionState) return;
      const key = id;
      sectionState.selectedMap.set(key, { item, count });
      globalSelectionOrder.push({ sectionState, key });
      seenIds.add(id);
    });
  }

  tagDropdownButton.addEventListener('click', () => {
    tagDropdownMenu.classList.toggle('open');
  });

  tagDropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const value = item.dataset.value;
      if (!value) {
        selectedTags.clear();
      } else {
        if (selectedTags.has(value)) {
          selectedTags.delete(value);
        } else {
          selectedTags.add(value);
        }
      }
      updateFilters();
      if (!value) {
        tagDropdownMenu.classList.remove('open');
      }
    });
  });

  expansionCheckboxes.forEach(input => {
    input.addEventListener('change', () => {
      if (input.checked) {
        visibleExpansions.add(input.value);
      } else {
        visibleExpansions.delete(input.value);
      }
      updateFilters();
    });
  });

  clearSelectionButton.addEventListener('click', clearEntireSelection);

  document.addEventListener('click', event => {
    if (!tagDropdown.contains(event.target)) {
      tagDropdownMenu.classList.remove('open');
    }
  });

  function applyFilters() {
    const allItemCards = document.querySelectorAll('.item-card');
    allItemCards.forEach(card => {
      const itemData = itemByKey.get(card.dataset.itemKey);
      if (itemData) {
        const shouldShow = shouldShowItem(itemData);
        card.style.display = shouldShow ? '' : 'none';
        const shouldDim = shouldDimItem(itemData);
        card.classList.toggle('dim', shouldDim);
      }
    });
  }

  // Event listeners for search
  searchInput.addEventListener('input', updateFilters);

  itemsByRarity.forEach(group => {
    group.items.sort((a, b) => a.id - b.id);
    const section = document.createElement('section');
    section.className = 'section';

    const header = document.createElement('div');
    header.className = 'section-header';
    const categoryLabel = getCategoryLabel(group.rarity);
    const sectionBodyId = `section-body-${sectionStates.length}`;
    header.innerHTML = `
      <h2>${categoryLabel}</h2>
      <button type="button" class="section-toggle" aria-expanded="true" aria-controls="${sectionBodyId}" aria-label="Collapse ${categoryLabel}">▾</button>
    `;
    section.appendChild(header);

    const sectionBody = document.createElement('div');
    sectionBody.className = 'section-body';
    sectionBody.id = sectionBodyId;
    sectionBody.innerHTML = '<div class="grid"></div>';
    const sectionToggle = header.querySelector('.section-toggle');
    sectionToggle.addEventListener('click', () => {
      const isExpanded = sectionToggle.getAttribute('aria-expanded') === 'true';
      sectionToggle.setAttribute('aria-expanded', String(!isExpanded));
      sectionToggle.setAttribute('aria-label', `${isExpanded ? 'Expand' : 'Collapse'} ${categoryLabel}`);
      sectionToggle.textContent = isExpanded ? '▸' : '▾';
      sectionBody.hidden = isExpanded;
    });
    const grid = sectionBody.querySelector('.grid');

    const selectedMap = new Map();
    const selectionBox = document.createElement('div');
    selectionBox.className = 'selection-box';
    selectionBox.innerHTML = '<div class="selection-empty">Click items to add them here</div><div class="selection-items"></div>';
    const selectionItems = selectionBox.querySelector('.selection-items');
    const selectionEmpty = selectionBox.querySelector('.selection-empty');
    selectionItems.classList.add('hidden');
    selectionEmpty.style.display = 'block';
    const sectionState = { id: group.rarity || `section-${sectionStates.length}`, selectedMap, refreshSelection: null };
    sectionStates.push(sectionState);
    group.items.forEach(item => itemKeyToSectionState.set(getSelectionKey(item), sectionState));

    function refreshSelection() {
      selectionItems.innerHTML = '';
      if (selectedMap.size === 0) {
        selectionEmpty.style.display = 'block';
        selectionItems.classList.add('hidden');
      } else {
        selectionEmpty.style.display = 'none';
        selectionItems.classList.remove('hidden');
        const orderedKeys = globalSelectionOrder
          .filter(entry => entry.sectionState === sectionState)
          .map(entry => entry.key);
        orderedKeys.forEach(selectionKey => {
          const entry = selectedMap.get(selectionKey);
          if (!entry) return;
          const tile = document.createElement('div');
          tile.className = 'selection-item';
          const itemIcon = document.createElement('img');
          itemIcon.alt = entry.item.name;
          setItemImageSource(itemIcon, entry.item);
          tile.appendChild(itemIcon);
          const count = document.createElement('div');
          count.className = 'selection-count';
          count.textContent = entry.count;
          tile.appendChild(count);

          if (window.supportsHover) {
            tile.onclick = () => {
              const current = selectedMap.get(selectionKey);
              if (!current) return;
              current.count -= 1;
              if (current.count <= 0) {
                selectedMap.delete(selectionKey);
                removeGlobalEntry(selectionKey);
              }
              refreshSelection();
              refreshGlobalSelection();
            };
            tile.onpointerenter = event => showTooltip(event, entry.item);
            tile.onpointermove = event => moveTooltip(event);
            tile.onpointerleave = hideTooltip;
          } else {
            tile.ontouchstart = (e) => {
              tile.touchStartTime = Date.now();
              tile.posX = e.touches[0].clientX;
              tile.posY = e.touches[0].clientY;
            }
            tile.ontouchend = (e) => { 
              const timeDiff = Date.now() - tile.touchStartTime;
              const posX = e.changedTouches[0].clientX;
              const posY = e.changedTouches[0].clientY;
              const xDiff = posX - tile.posX;
              const yDiff = posY - tile.posY;
              const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
              if (!draggedKey && timeDiff <= tapLength && distance < tapDistance)
                showModal(entry.item);
            };
          }
          attachDragHandlers(tile, sectionState, selectionKey);
          selectionItems.appendChild(tile);
        });
      }
      refreshGlobalSelection();
    }
    sectionState.refreshSelection = refreshSelection;

    function addToSelection(item) {
      const key = getSelectionKey(item);
      const entry = selectedMap.get(key) || { item, count: 0 };
      entry.count += 1;
      selectedMap.set(key, entry);
      insertGlobalEntry(sectionState, key);
      refreshSelection();
    }

    group.items.forEach(item => grid.appendChild(createItemCard(item, addToSelection)));
    section.appendChild(sectionBody);
    section.appendChild(selectionBox);
    content.appendChild(section);
  });

  restoreSelectionFromHash(window.location.hash.slice(1));
  refreshAllSelections();
  updateFilters();
}

// Initialize the app
render();
