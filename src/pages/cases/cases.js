import '../../index.css'
import { Sticker } from '../../partials/A_sticker/A_sticker';

document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.A_filter_tag');
    const cards = document.querySelectorAll('.W_cases_materials_card');
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

    const case_yandex = document.getElementById('I_case_yandex')
    const case_sber = document.getElementById('I_case_sber')
    const case_spotify = document.getElementById('I_case_spotify')
    const case_ibm = document.getElementById('I_case_ibm')

    case_yandex.addEventListener('click', () => {
        window.location.href = '/Connecteam/cases/yandexrebranding';
    });
    case_sber.addEventListener('click', () => {
        window.location.href = '/Connecteam/cases/sber';
    });
    case_spotify.addEventListener('click', () => {
      window.location.href = '/Connecteam/cases/spotify';
    });
    case_ibm.addEventListener('click', () => {
      window.location.href = '/Connecteam/cases/ibm';
    });
});

Sticker({ imageSrc: '/Connecteam/images/stickers/sticker2body.svg', content: 'Чекнуть библиотеки', maxLength: 50 });
Sticker({ imageSrc: '/Connecteam/images/stickers/sticker3body.svg', content: 'Созвон с лидом 21:00', maxLength: 50 });