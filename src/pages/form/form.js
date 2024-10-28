import '../../index.css'

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
  
  const form = document.getElementById("form");
    
  async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
          } else {
          }
        })
      }
    }).catch(error => {
    });
  }
  form.addEventListener("submit", handleSubmit)
});