import { asideBody, asidePanel } from './elements.js';
import { platforms } from './data.js';
import renderChat from './renderChat.js';
import './menuBtn.js'

// INITIALIZATION SIDE BAR
platforms.forEach(platform => {
	const itemElement = document.createElement('a')
	itemElement.classList.add('sidebar-item')
	itemElement.href = '#'
	itemElement.addEventListener('click', e => {
		e.preventDefault()
		renderChat(platform)
		asidePanel.classList.contains('block') && asidePanel.classList.toggle('block')
	})

	itemElement.textContent = platform
	
	asideBody.appendChild(itemElement)
})

// RENDER CHAT BY DEFAULT IF PARAM EXISTS
const platformParam = new URLSearchParams(window.location.search).get('platform')
platformParam && renderChat(platformParam)
