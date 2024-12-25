import './index.css'

document.addEventListener("DOMContentLoaded", () => {
    const case_yandex = document.getElementById('I_case_yandex')

    case_yandex.addEventListener('click', () => {
        window.location.href = '/Connecteam/cases/case';
    });
})