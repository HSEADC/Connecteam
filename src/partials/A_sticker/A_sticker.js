export function Sticker({ color = 'orange', content = '' }) {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker');
    sticker.contentEditable = true;
    sticker.style.backgroundColor = color;
  
    sticker.innerText = content;
  
    sticker.style.position = 'absolute';
    sticker.style.top = `${Math.random() * (window.innerHeight - 150)}px`;
    sticker.style.left = `${Math.random() * (window.innerWidth - 150)}px`;
  
    enableDrag(sticker);
  
    document.body.appendChild(sticker);
  }
  
  function enableDrag(element) {
    let isDragging = false;
    let offsetX, offsetY;
  
    element.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - element.offsetLeft;
      offsetY = e.clientY - element.offsetTop;
      element.style.zIndex = 1000;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
  
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      element.style.left = `${Math.max(0, Math.min(window.innerWidth - element.offsetWidth, x))}px`;
      element.style.top = `${Math.max(0, Math.min(window.innerHeight - element.offsetHeight, y))}px`;
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
      element.style.zIndex = '';
    });
  }