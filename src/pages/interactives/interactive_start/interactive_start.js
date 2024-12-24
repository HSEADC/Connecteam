import '../../../index.css'

import { Sticker } from '../../../partials/A_sticker/A_sticker';

Sticker({ imageSrc: '../../images/stickers/sticker1body.svg', content: 'тз Софья reowes.com', maxLength: 50 });  

function generateIdea() {
  const ideaBlock = document.getElementById('I_idea_block');
  const ideaText = document.getElementById('I_idea_text');
  const agileBlock = document.getElementById('I_agile_block');

  ideaBlock.classList.remove('hidden');

  const texts = ['Сходить на шашлыки...', 'Придумать новую задачу...', 'Игровой Agile-спринт'];
  let index = 0;

  const interval = setInterval(() => {
    ideaText.textContent = texts[index];
    ideaText.className = 'text_gray';

    index++;

    if (index === texts.length) {
      clearInterval(interval);

      ideaText.textContent = texts[texts.length - 1];
      ideaText.className = 'text_black';

      setTimeout(() => {
        agileBlock.classList.remove('hidden');
      }, 500);
    }
  }, 500);
}

window.generateIdea = generateIdea;
