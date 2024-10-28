document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.A_gradient_button');

    let animationFrameId;
    let position = 0;
    
    function animateGradient(button) {
        position = (position + 1) % 100;
        button.style.backgroundPosition = `${position}% 50%`;
        animationFrameId = requestAnimationFrame(() => animateGradient(button));
    }
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            animationFrameId = requestAnimationFrame(() => animateGradient(button));
        });
    
        button.addEventListener('mouseout', () => {
            cancelAnimationFrame(animationFrameId);
        });
    });
})