console.log('I am attach.');

const bookmark = document.getElementsByClassName('bookmark-icon');
const button = document.getElementsByTagName('button');
const answer_box = document.getElementsByClassName('answer');
console.log('Button: ', button);

for (let element of bookmark) {
    element.addEventListener('click', (event) => {
        let source;
        event.target.src.endsWith('assets/bookmark.png')
            ? (source = './assets/bookmark_filled.png')
            : (source = './assets/bookmark.png');

        event.target.src = source;
    });
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
        let buttonText;
        event.target.textContent === 'Show Answer'
            ? (buttonText = 'Hide Answer')
            : (buttonText = 'Show Answer');

        event.target.textContent = buttonText;
        answer_box[i].classList.toggle('hidden');
    });
}
