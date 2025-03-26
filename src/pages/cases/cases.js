import '../../index.css'

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

    case_yandex.addEventListener('click', () => {
        window.location.href = 'Connecteam/cases/case';
    });
    case_sber.addEventListener('click', () => {
        window.location.href = 'Connecteam/cases/sber';
    });
});


