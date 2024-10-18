export function handleBookmark(event) {
    let source;
    event.target.src.endsWith('assets/bookmark.png')
        ? (source = './assets/bookmark_filled.png')
        : (source = './assets/bookmark.png');

    event.target.src = source;
}

export function handleButtonClick(event, answer) {
    let buttonText;
    event.target.textContent === 'Show Answer'
        ? (buttonText = 'Hide Answer')
        : (buttonText = 'Show Answer');

    event.target.textContent = buttonText;
    answer.classList.toggle('hidden');
}
