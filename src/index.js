import './index.css'
import articleData from './partials/O_header/O_header_filter.json';

document.addEventListener("DOMContentLoaded", () => {
    const previewSearchInput = document.querySelector('.A_preview_search_input');
    const previewSearchResults = document.querySelector('.W_preview_results_dropdown');
    let isOpen = false;
  
    previewSearchInput.addEventListener('input', () => {
        const query = previewSearchInput.value.trim();
        if (query.length > 0) {
          const filteredResults = articleData.filter(article => {
            const lowerQuery = query.toLowerCase();
            return (
              article.title.toLowerCase().includes(lowerQuery) ||
              article.description.toLowerCase().includes(lowerQuery)
            );
          });
          showResults(filteredResults);
          previewSearchInput.style.borderRadius = '2.4rem 2.4rem 0 0';
        } else {
          hideResults();
          previewSearchInput.style.borderRadius = '';
        }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    });
  
    document.addEventListener('click', (e) => {
      if (isOpen && !e.target.closest('.M_preview_search_bar')) {
        closeSearch();
      }
    });
  
    function showResults(results) {
        previewSearchResults.innerHTML = '';
      
      if (results.length === 0) {
        previewSearchResults.innerHTML = `
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
          previewSearchResults.appendChild(result);
        });
      }
      
      previewSearchResults.style.display = 'block';
      setTimeout(() => previewSearchResults.style.opacity = '1', 10);
    }
  
    function hideResults() {
        previewSearchResults.style.opacity = '0';
        setTimeout(() => {
          previewSearchResults.style.display = 'none';
          previewSearchInput.style.borderRadius = '';
        }, 200);
      }
  
  
    function closeSearch() {
        previewSearchInput.style.width = '0';
        previewSearchInput.style.padding = '0';
        previewSearchInput.style.opacity = '0';
        previewSearchInput.style.border = 'none';
        previewSearchInput.style.borderRadius = '';
        previewSearchInput.value = '';
      hideResults();
      isOpen = false;
      
      setTimeout(() => {
        previewSearchInput.style.position = 'absolute';
        previewSearchInput.style.right = '40px';
      }, 300);
    }

    const case_yandex = document.getElementById('I_case_yandex');
    if (case_yandex) {
        case_yandex.addEventListener('click', () => {
            window.location.href = '/cases/case';
        });
    }
});