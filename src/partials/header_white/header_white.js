document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.Q_hm_burger_menu');
    const mobileMenu = document.querySelector('.O_header_main_mobile');
    const menuClose = document.querySelector('.Q_header_main_mobile_close')
    

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
