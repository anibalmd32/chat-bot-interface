import { asideBody } from './scripts/elements.js';
import { platforms } from './scripts/data.js';
import renderChat from './scripts/renderChat.js';

platforms.forEach(platform => {
	const itemElement = document.createElement('a')
	itemElement.classList.add('sidebar-item')
	itemElement.href = '#'
	itemElement.addEventListener('click', renderChat)
	itemElement.textContent = platform
	
	asideBody.appendChild(itemElement)
})
