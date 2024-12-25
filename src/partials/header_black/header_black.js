document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.A_hm_nav_button');

    const currentPath = window.location.pathname;

    navButtons.forEach(button => {
        if (button.getAttribute('href') === currentPath) {
            button.style.background = 'var(--color-pink)';
        }
    });

    const burgerMenu = document.querySelector('.Q_hbm_burger_menu');
    const mobileMenu = document.querySelector('.O_header_white_mobile');
    const menuClose = document.querySelector('.Q_header_white_mobile_close')
    

    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenuFunc() {
        mobileMenu.classList.remove('active');
        document.body.style.height = '';
        document.body.style.overflow = '';
    }
    
    burgerMenu.addEventListener('click', openMenu);
    
    menuClose.addEventListener('click', closeMenuFunc);
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
        closeMenuFunc();
        }
    })
});
