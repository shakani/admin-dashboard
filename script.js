// var imgs = document.querySelectorAll('img');

// function changeImg(element) {
//     element.src = './assets/question-mark.png';
//     element.style.height = '30px';
// }

// imgs.forEach(changeImg);

// Dyamic project card creation

var projectBox = document.querySelector('.project-container');

let cardTitles = ['Super Cool Project', 'Less Cool Project', 'Impossible App', 'Easy Peasy App', 'Ad Blocker', 'Money Maker'];
const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aliquid enim ipsam laudantium iste molestiae beatae. Dolor, minima. Eum est aliquam facere nisi quaerat nulla! Iste enim repudiandae amet obcaecati!';
let btnClasses = ['Star', 'Watch', 'Fork'];

for(let i = 0; i < 6; i++) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = cardTitles[i];

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.textContent = lorem;

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    let btn_srcs = ['star-plus-outline.svg', 'source-fork.svg', 'eye-plus-outline.svg'];

    for(let j = 0; j < 3; j++) {
        // let btn = document.createElement('button');
        // btn.classList.add(btnClasses[j]);
        // btn.textContent = btnClasses[j]; // remove later
        let btn = document.createElement('img');
        btn.src = './assets/icons/' + btn_srcs[j];
        buttonContainer.appendChild(btn);
    }

    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    card.appendChild(buttonContainer);

    projectBox.appendChild(card);
}