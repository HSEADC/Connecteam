import '../../index.css'

document.addEventListener("DOMContentLoaded", () => {
    const case_yandex = document.getElementById('I_article_feedback')

    case_yandex.addEventListener('click', () => {
        window.location.href = '/articles/article';
    });
})