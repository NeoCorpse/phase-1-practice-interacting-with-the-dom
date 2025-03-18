'use strict';

const counter = document.querySelector('#counter');
let myInterval = setInterval(() => {
	counter.textContent = ++counter.textContent;
}, 1000);

const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likes = document.querySelector('.likes');
const form = document.querySelector('form')

minus.addEventListener('click', (e) => {
	counter.textContent = --counter.textContent;
});
plus.addEventListener('click', (e) => {
	counter.textContent = ++counter.textContent;
});
pause.addEventListener('click', (e) => {
	const buttons = document.querySelectorAll('button:not(#pause)');
	if (pause.textContent === 'pause') {
		clearInterval(myInterval);
		buttons.forEach((button) => button.setAttribute('disabled', true));
		pause.textContent = 'resume';
	} else {
		myInterval = setInterval(() => (counter.textContent = ++counter.textContent), 1000);
		buttons.forEach((button) => button.removeAttribute('disabled'));
        pause.textContent = 'pause'
	}
});
heart.addEventListener('click', (e) => {
	if ([...likes.childNodes]?.find((child) => child.getAttribute('data-item') === counter.textContent)) {
		let span = likes.querySelector(`[data-item='${counter.textContent}'] > span`);
		span.textContent++;
		let item = likes.querySelector(`[data-item='${counter.textContent}']`);
		if (item.textContent.at(-1) !== 's') {
			item.innerHTML = item.innerHTML + 's';
		}
	} else {
		let item = document.createElement('li');
		item.setAttribute('data-item', counter.textContent);
		item.innerHTML = `${counter.textContent} has been liked <span>1</span> time`;
		likes.appendChild(item);
	}
});

form.addEventListener('submit', e => {
    e.preventDefault()
    const input = form.querySelector('input')
    const comment = document.createElement('p')
    comment.textContent = input.value
    input.value= ''
    const comments= document.querySelector('.comments')
    comments.appendChild(comment)
})