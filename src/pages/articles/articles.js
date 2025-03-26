import '../../index.css';
import { Sticker } from '../../partials/A_sticker/A_sticker';

document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.A_filter_tag');
    const cards = Array.from(document.querySelectorAll('.W_articles_materials_card'));
    const loadMoreBtn = document.querySelector('.A_preview_materials_button');
    
    const activeTags = new Set();
    let visibleCardsCount = 5;
    let currentFilteredCards = [...cards];

    function init() {
        updateCardsVisibility();
        updateLoadMoreButton();
    }

    function updateCardsVisibility() {
        cards.forEach(card => {
            card.style.display = '';
            card.classList.remove('hidden');
        });

        currentFilteredCards = activeTags.size === 0 
            ? [...cards] 
            : cards.filter(card => {
                const cardTags = card.getAttribute('data-tags').split(' ');
                return [...activeTags].some(tag => cardTags.includes(tag));
            });

        cards.forEach(card => {
            if (!currentFilteredCards.includes(card)) {
                card.classList.add('hidden');
            }
        });

        currentFilteredCards.forEach((card, index) => {
            if (index >= visibleCardsCount) {
                card.classList.add('hidden');
            } else {
                card.classList.remove('hidden');
            }
        });

        updateLoadMoreButton();
    }

    function updateLoadMoreButton() {
        if (currentFilteredCards.length <= visibleCardsCount) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            const tagValue = this.getAttribute('data-tag');
            
            if (e.target.classList.contains('remove')) {
                activeTags.delete(tagValue);
                this.classList.remove('active');
            } else {
                if (activeTags.has(tagValue)) {
                    activeTags.delete(tagValue);
                    this.classList.remove('active');
                } else {
                    activeTags.add(tagValue);
                    this.classList.add('active');
                }
            }

            visibleCardsCount = 5;
            updateCardsVisibility();
        });
    });

    loadMoreBtn.addEventListener('click', function() {
        visibleCardsCount += 5;
        updateCardsVisibility();
    });

    const feedbackCard = document.getElementById('I_article_feedback');
    if (feedbackCard) {
        feedbackCard.addEventListener('click', () => {
            window.location.href = '/articles/feedback';
        });
    }

    init();
});

Sticker({ imageSrc: '/Connecteam/images/stickers/sticker1body.svg', content: 'Утвердить main страницу', maxLength: 50 });
Sticker({ imageSrc: '/Connecteam/images/stickers/sticker2body.svg', content: 'Ревью Алексей кейс ноябрь', maxLength: 50 });