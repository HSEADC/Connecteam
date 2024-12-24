import '../../../index.css'

const steps = document.querySelectorAll('.W_article_description_waterfall');
const margins = [
    { left: '0%', right: '40%' },
    { left: '10%', right: '30%' },
    { left: '20%', right: '20%' },
    { left: '30%', right: '10%' },
    { left: '40%', right: '0%' },
];

steps.forEach((step, index) => {
    step.style.marginLeft = margins[index].left;
    step.style.marginRight = margins[index].right;
});