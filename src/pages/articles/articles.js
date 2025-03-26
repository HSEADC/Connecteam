import '../../index.css'

document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.A_filter_tag');
    const cards = document.querySelectorAll('.W_articles_materials_card');
    const activeTags = new Set();

    tags.forEach(tag => {
      tag.addEventListener('click', function(e) {
        const tagValue = this.getAttribute('data-tag');
        
        if (e.target.classList.contains('remove')) {
          activeTags.delete(tagValue);
          this.classList.remove('active');
          updateCards();
          return;
        }

        if (activeTags.has(tagValue)) {
          activeTags.delete(tagValue);
          this.classList.remove('active');
        } else {
          activeTags.add(tagValue);
          this.classList.add('active');
        }

        updateCards();
      });
    });

    function updateCards() {
      cards.forEach(card => {
        const cardTags = card.getAttribute('data-tags').split(' ');
        
        if (activeTags.size === 0) {
          card.classList.remove('hidden');
          return;
        }

        const hasMatchingTag = [...activeTags].some(tag => 
          cardTags.includes(tag)
        );

        if (hasMatchingTag) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    updateCards();
  });

  function Sticker({ imageSrc, content, maxLength }) {
    const stickerContainer = document.getElementById('stickerContainer');
    const sticker = document.createElement('div');
    sticker.className = 'sticker';
    sticker.innerHTML = `
      <img src="${imageSrc}" alt="Sticker">
      <div class="sticker-content">${content.length > maxLength ? content.substring(0, maxLength) + '...' : content}</div>
    `;
    stickerContainer.appendChild(sticker);
  }

  Sticker({ 
    imageSrc: '../../images/stickers/sticker1body.svg', 
    content: 'Утвердить main страницу', 
    maxLength: 50 
  });

  Sticker({ 
    imageSrc: '../../images/stickers/sticker2body.svg', 
    content: 'Ревью Алексей кейс ноябрь', 
    maxLength: 50 
  });

  document.addEventListener("DOMContentLoaded", () => {
    const case_yandex = document.getElementById('I_article_feedback');
    if (case_yandex) {
      case_yandex.addEventListener('click', () => {
        window.location.href = '/articles/feedback';
      });
    }
  });