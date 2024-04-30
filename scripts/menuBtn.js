import { menuBtn, asidePanel } from "./elements.js";

menuBtn.addEventListener('click', () => {
	asidePanel.classList.toggle('block')
})