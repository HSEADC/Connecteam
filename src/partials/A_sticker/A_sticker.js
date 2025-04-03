export function Sticker({ imageSrc, content = '', maxLength = 100 }) {
  const sticker = document.createElement('div');
  sticker.classList.add('W_sticker');
  sticker.style.backgroundImage = `url(${imageSrc})`;
  sticker.style.backgroundSize = 'cover';
  sticker.style.backgroundPosition = 'center';
  sticker.style.zIndex = 9999;

  const textElement = document.createElement('p');
  textElement.classList.add('A_sticker_text');
  textElement.contentEditable = true;
  textElement.innerText = content;

  textElement.addEventListener('input', () => {
    if (textElement.innerText.length > maxLength) {
      textElement.innerText = textElement.innerText.slice(0, maxLength);
    }
  });

  textElement.addEventListener('focus', () => {
    textElement.style.outline = 'none';
  });

  sticker.appendChild(textElement);

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
    element.style.zIndex = 9999;
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
