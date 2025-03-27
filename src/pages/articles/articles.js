import '../../index.css';
import { Sticker } from '../../partials/A_sticker/A_sticker';

document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.A_filter_tag');
    const cards = Array.from(document.querySelectorAll('.W_articles_materials_card'));
    const loadMoreBtn = document.querySelector('.A_preview_materials_button');
    
    const activeTags = new Set();
    let visibleCardsCount = 5;
    let currentFilteredCards = [...cards];

    function init() {
        updateCardsVisibility();
        updateLoadMoreButton();
    }

    function updateCardsVisibility() {
        cards.forEach(card => {
            card.style.display = '';
            card.classList.remove('hidden');
        });

        currentFilteredCards = activeTags.size === 0 
            ? [...cards] 
            : cards.filter(card => {
                const cardTags = card.getAttribute('data-tags').split(' ');
                return [...activeTags].some(tag => cardTags.includes(tag));
            });

        cards.forEach(card => {
            if (!currentFilteredCards.includes(card)) {
                card.classList.add('hidden');
            }
        });

        currentFilteredCards.forEach((card, index) => {
            if (index >= visibleCardsCount) {
                card.classList.add('hidden');
            } else {
                card.classList.remove('hidden');
            }
        });

        updateLoadMoreButton();
    }

    function updateLoadMoreButton() {
        if (currentFilteredCards.length <= visibleCardsCount) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            const tagValue = this.getAttribute('data-tag');
            
            if (e.target.classList.contains('remove')) {
                activeTags.delete(tagValue);
                this.classList.remove('active');
            } else {
                if (activeTags.has(tagValue)) {
                    activeTags.delete(tagValue);
                    this.classList.remove('active');
                } else {
                    activeTags.add(tagValue);
                    this.classList.add('active');
                }
            }

            visibleCardsCount = 5;
            updateCardsVisibility();
        });
    });

    loadMoreBtn.addEventListener('click', function() {
        visibleCardsCount += 5;
        updateCardsVisibility();
    });

    const feedbackArticle = document.getElementById('I_article_feedback');
    const friendshipArticle = document.getElementById('I_article_friendship');
    const deadlineCommunicationArticle = document.getElementById('I_article_deadlinecommunication');
    const developersCoworkingArticle = document.getElementById('I_article_developerscoworking');
    const letsPlayArticle = document.getElementById('I_article_letsplay');
    const teamPsychologyMotivationArticle = document.getElementById('I_article_teampsychologymotivation');
    const jobFriendshipArticle = document.getElementById('I_article_jobfriendship');
    const newCommandMembersArticle = document.getElementById('I_article_newcommandmembers');
    const problemTemplatesArticle = document.getElementById('I_article_problemtemplates');
    const trustRoleArticle = document.getElementById('I_article_trustrole');
    const teamMotivationArticle = document.getElementById('I_article_teammotivation');
    const magicTabletArticle = document.getElementById('I_article_magictablet');
    const diagnosticToolsArticle = document.getElementById('I_article_diagnostictools');
    const roleTeamBuildingArticle = document.getElementById('I_article_roleteambuilding');
    const qadeveloperscommunicationArticle = document.getElementById('I_article_qadeveloperscommunication');
    const departmentscoldwarArticle = document.getElementById('I_article_departmentscoldwar');
    const meetingtypesArticle = document.getElementById('I_article_meetingtypes');
    const mediatorArticle = document.getElementById('I_article_mediator');
    const techicaljargonArticle = document.getElementById('I_article_techicaljargon');
    const waltercommunicationArticle = document.getElementById('I_article_waltercommunication');
    const collegueargueArticle = document.getElementById('I_article_collegueargue');
    const streamworkingArticle = document.getElementById('I_article_streamworking');
    if (streamworkingArticle) {
        streamworkingArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/streamworking';
        });
    }
    if (collegueargueArticle) {
        collegueargueArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/collegueargue';
        });
    }

    if (waltercommunicationArticle) {
        waltercommunicationArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/waltercommunication';
        });
    }

    if (techicaljargonArticle) {
        techicaljargonArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/techicaljargon';
        });
    }
    if (mediatorArticle) {
        mediatorArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/mediator';
        });
    }
    if (meetingtypesArticle) {
        meetingtypesArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/meetingtypes';
        });
    }

    if (departmentscoldwarArticle) {
        departmentscoldwarArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/departmentscoldwar';
        });
    }

    if (qadeveloperscommunicationArticle) {
        qadeveloperscommunicationArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/qadeveloperscommunication';
        });
    }

    
    if (roleTeamBuildingArticle) {
        roleTeamBuildingArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/roleteambuilding';
        });
    }

    
    if (diagnosticToolsArticle) {
        diagnosticToolsArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/diagnostictools';
        });
    }

    if (magicTabletArticle) {
        magicTabletArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/magictablet';
        });
    }

    if (teamMotivationArticle) {
        teamMotivationArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/teammotivation';
        });
    }

    if (trustRoleArticle) {
        trustRoleArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/trustrole';
        });
    }

    if (problemTemplatesArticle) {
        problemTemplatesArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/problemtemplates';
        });
    }

    if (newCommandMembersArticle) {
        newCommandMembersArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/newcommandmembers';
        });
    }

    if (jobFriendshipArticle) {
        jobFriendshipArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/jobfriendship';
        });
    }

    if (teamPsychologyMotivationArticle) {
        teamPsychologyMotivationArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/teampsychologymotivation';
        });
    }
    if (letsPlayArticle) {
        letsPlayArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/letsplay';
        });
    }
    if (developersCoworkingArticle) {
        developersCoworkingArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/developerscoworking';
        });
    }

    if (deadlineCommunicationArticle) {
        deadlineCommunicationArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/deadlinecommunication';
        });
    }

    if (friendshipArticle) {
        friendshipArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/colleguefriendship';
        });
    }

    if (feedbackArticle) {
        feedbackArticle.addEventListener('click', () => {
            window.location.href = '/Connecteam/articles/feedback';
        });
    }

    init();
});

Sticker({ imageSrc: '/Connecteam/images/stickers/sticker1body.svg', content: 'Утвердить main страницу', maxLength: 50 });
Sticker({ imageSrc: '/Connecteam/images/stickers/sticker2body.svg', content: 'Ревью Алексей кейс ноябрь', maxLength: 50 });