import '../../index.css'
import { Sticker } from '../../partials/A_sticker/A_sticker';

Sticker({ imageSrc: '../../images/stickers/sticker1body.svg', content: 'Утвердить main страницу', maxLength: 50 });
Sticker({ imageSrc: '../../images/stickers/sticker2body.svg', content: 'Ревью Алексей кейс ноябрь', maxLength: 50 });

document.addEventListener("DOMContentLoaded", () => {
    const case_yandex = document.getElementById('I_article_feedback')

    case_yandex.addEventListener('click', () => {
        window.location.href = '/articles/article';
    });
})