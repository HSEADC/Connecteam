import '../../../index.css';
import { Sticker } from '../../../partials/A_sticker/A_sticker';

Sticker({ 
  imageSrc: '../../images/stickers/sticker1body.svg', 
  content: 'тз Софья reowes.com', 
  maxLength: 50 
});

const selectedParams = {
  participants: null,
  purpose: null,
  duration: null,
  format: 'online'
};

function setupOptionButtons() {
  const optionButtons = document.querySelectorAll('.A_option_button');
  
  optionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const paramType = this.getAttribute('data-param');
      const value = this.getAttribute('data-value');
      
      document.querySelectorAll(`[data-param="${paramType}"]`).forEach(btn => {
        btn.classList.remove('selected');
      });
      
      this.classList.add('selected');
      
      selectedParams[paramType] = value;
    });
  });
}

function setupPurposeSelect() {
  const purposeSelect = document.getElementById('purposeSelect');
  purposeSelect.addEventListener('change', function() {
    selectedParams.purpose = this.value;
  });
  selectedParams.purpose = purposeSelect.value;
}

function setupRadioButtons() {
  const radioInputs = document.querySelectorAll('.M_radio_input');
  
  radioInputs.forEach(input => {
    input.addEventListener('change', function() {
      if (this.checked) {
        selectedParams.format = this.value;
      }
    });
    
    if (input.checked) {
      selectedParams.format = input.value;
    }
  });
}

function generateIdea() {
  if (!selectedParams.participants || !selectedParams.duration || !selectedParams.purpose) {
    alert('Пожалуйста, выберите все параметры');
    return;
  }

  const selectionScreen = document.getElementById('selectionScreen');
  const ideaBlock = document.getElementById('I_idea_block');
  const agileBlock = document.getElementById('I_agile_block');

  selectionScreen.classList.add('hidden');
  ideaBlock.classList.remove('hidden');
  
  setTimeout(() => {
    ideaBlock.classList.add('hidden');
    agileBlock.classList.remove('hidden');
    
    console.log('Выбранные параметры:', selectedParams);
    agileBlock.scrollIntoView({ behavior: 'smooth' });
    
    selectionScreen.classList.remove('hidden');
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  setupOptionButtons();
  setupPurposeSelect();
  setupRadioButtons();
  window.generateIdea = generateIdea;
});