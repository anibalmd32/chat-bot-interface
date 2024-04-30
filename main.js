import { asideBody } from './scripts/elements.js';
import { platforms } from './scripts/data.js';
import renderChat from './scripts/renderChat.js';

console.log('Chat Bot Interface')
platforms.forEach(platform => {
	const itemElement = document.createElement('a')
	itemElement.classList.add('sidebar-item')
	itemElement.href = '#'
	itemElement.addEventListener('click', e => {
		e.preventDefault()
		renderChat(platform)
	})
	itemElement.textContent = platform
	
	asideBody.appendChild(itemElement)
})

const platformParam = new URLSearchParams(window.location.search).get('platform')

if (platformParam) {
	renderChat(platformParam)
}
