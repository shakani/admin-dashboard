var imgs = document.querySelectorAll('img');

function changeImg(element) {
    element.src = './assets/question-mark.png';
    element.style.height = '30px';
}

imgs.forEach(changeImg);