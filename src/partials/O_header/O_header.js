import articleData from './O_header_filter.json';
import '../../index.css'

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.A_header_nav_button');
    const currentPath = window.location.pathname;

    navButtons.forEach(button => {
        if (button.getAttribute('href') === currentPath) {
            button.style.background = 'var(--color-pink)';
        }
    });

    const searchIcon = document.querySelector('.W_header_search_icon');
    const searchInput = document.querySelector('.A_header_search_input');
    const searchResults = document.querySelector('.W_search_results_dropdown');
    let isOpen = false;
  
    searchIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      
      if (!isOpen) {
        searchInput.style.width = '20.6rem';
        searchInput.style.padding = 'var(--spacing-5) var(--spacing-20)';
        searchInput.style.opacity = '1';
        searchInput.style.border = '1px solid var(--color-white)';
        searchInput.style.position = 'relative';
        searchInput.style.right = '0';
        searchInput.focus();
        searchIcon.style.background = 'var(--color-purple)';
        isOpen = true;
      } else {
        closeSearch();
      }
    });
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      if (query.length > 0) {
        const filteredResults = articleData.filter(article => {
          const lowerQuery = query.toLowerCase();
          return (
            article.title.toLowerCase().includes(lowerQuery) ||
            article.description.toLowerCase().includes(lowerQuery)
          );
        });
        showResults(filteredResults);
      } else {
        hideResults();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    });
  
    document.addEventListener('click', (e) => {
      if (isOpen && !e.target.closest('.M_header_search_bar')) {
        closeSearch();
      }
    });
  
    function showResults(results) {
      searchResults.innerHTML = '';
      
      if (results.length === 0) {
        searchResults.innerHTML = `
          <div class="M_search_result_item">
            <p class="text_medium_description_text">Ничего не найдено</p>
          </div>
        `;
      } else {
        results.slice(0, 5).forEach(item => {
          const result = document.createElement('a');
          result.className = 'M_search_result_item';
          result.href = item.url;
          result.innerHTML = `
            <h4 class="text_medium_description_text">${item.title}</h4>
            <p class="text_small_description_text">${item.description}</p>
          `;
          searchResults.appendChild(result);
        });
      }
      
      searchResults.style.display = 'block';
      setTimeout(() => searchResults.style.opacity = '1', 10);
    }
  
    function hideResults() {
      searchResults.style.opacity = '0';
      setTimeout(() => searchResults.style.display = 'none', 200);
    }
  
    function closeSearch() {
      searchInput.style.width = '0';
      searchInput.style.padding = '0';
      searchInput.style.opacity = '0';
      searchInput.style.border = 'none';
      searchInput.value = '';
      searchIcon.style.background = 'var(--color-blue)';
      hideResults();
      isOpen = false;
      
      setTimeout(() => {
        searchInput.style.position = 'absolute';
        searchInput.style.right = '40px';
      }, 300);
    }

    const burgerButton = document.querySelector('.A_header_burger_menu_button');
    const closeButton = document.querySelector('.A_header_burger_menu_close');
    const mobileMenu = document.querySelector('.O_header_mobile');
    
    function openMenu() {
      mobileMenu.classList.add('active');
      document.body.classList.add('no_scroll');
    }
    
    function closeMenu() {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('no_scroll');
    }
    
    burgerButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });
});