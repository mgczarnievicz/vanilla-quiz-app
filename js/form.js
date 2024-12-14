import { handleBookmark, handleButtonClick } from './utilities.js';

const cardFrom = document.querySelector('form');
const newCardContainer = document.querySelector('[js-data="new-cards"]');

cardFrom.addEventListener('submit', (event) => {
	event.preventDefault();
	const elements = event.target.elements;
	const question = elements.question.value;
	const answer = elements.answer.value;
	const tags = elements.tags.value.split(',').map((t) => t.trim());
	createQuizCard(question, answer, tags);
});

function createQuizCard(question, answer, tags) {
	const questionCard = document.createElement('section');
	questionCard.classList.add('card');
	const imgEl = createImage();
	const headerEl = createHeader(question);
	const buttonEl = createButton();
	const answerEl = createAnswer(answer);
	const tagsEl = createTags(tags);
	questionCard.append(imgEl, headerEl, buttonEl, answerEl, tagsEl);

	buttonEl.addEventListener('click', (event) => {
		handleButtonClick(event, answerEl);
	});
	imgEl.addEventListener('click', handleBookmark);
	console.log('Question Card: ', questionCard);
	newCardContainer.appendChild(questionCard);
}

function createImage() {
	const imageEl = document.createElement('img');
	imageEl.setAttribute('src', './assets/bookmark.png');
	imageEl.setAttribute('alt', 'bookmark');
	imageEl.classList.add('bookmark-icon');
	return imageEl;
}

function createHeader(heading) {
	const headerEl = document.createElement('h2');
	// headerEl.classList.add('question-card__title');
	headerEl.textContent = heading;
	return headerEl;
}

function createButton() {
	const buttonEl = document.createElement('button');
	// buttonEl.classList.add('question-card__button');
	buttonEl.textContent = 'show answer';
	return buttonEl;
}

function createAnswer(answer) {
	const answerEl = document.createElement('h2');
	answerEl.classList.add('card__answer');
	answerEl.classList.add('--hidden');
	answerEl.textContent = answer;
	return answerEl;
}

function createTags(tags) {
	const tagContainerEl = document.createElement('section');
	tagContainerEl.classList.add('card__hashtag');
	for (let tag of tags) {
		const tagEl = document.createElement('h5');
		// tagEl.classList.add('question-card__tag');
		tagEl.textContent = tag;
		tagContainerEl.append(tagEl);
	}
	return tagContainerEl;
}
