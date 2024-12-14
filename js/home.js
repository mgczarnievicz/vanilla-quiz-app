console.log('I am attach.');

import { handleBookmark, handleButtonClick } from './utilities.js';

const bookmark = document.getElementsByClassName('bookmark-icon');
const button = document.getElementsByTagName('button');
const answer_box = document.getElementsByClassName('card__answer');

for (let element of bookmark) {
	element.addEventListener('click', handleBookmark);
}

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener('click', (event) => {
		handleButtonClick(event, answer_box[i]);
	});
}
