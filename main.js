import { asideBody } from './scripts/elements.js';
import { platforms } from './scripts/data.js';

platforms.map(platform => {
	asideBody.innerHTML += `<a href="chats.html?platform=${platform}" class="sidebar-item">${platform}</a>`
})