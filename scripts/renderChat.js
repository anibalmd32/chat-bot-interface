import { allData } from "./data.js";
import { chatIlustration, chatInterface, chatBody } from "./elements.js";

export default function renderChat(event) {
	event.preventDefault()
	const platform = event.target.textContent
	window.history.replaceState('', '', `?platform=${platform}`)

	chatBody.innerHTML = ''

	const chats = allData.filter(el => el.platform === platform)
	
	chatIlustration.classList.add('hidden')
	chatInterface.classList.remove('hidden')

	chats.forEach(element => {
		const chatItem = document.createElement('div')
		chatItem.classList.add('chat-item')
		
		chatBody.appendChild(chatItem)
		chatItem.innerHTML = element.message_text

		if (element.sender_name === 'bot') {
			chatItem.classList.add('item-left')
		} else {
			chatItem.classList.add('item-right')
		}
	});
}