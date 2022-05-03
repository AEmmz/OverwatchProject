'use strict';

//Section Transitions on Hover
const tankSection = document.querySelector('.tank');
const damageSection = document.querySelector('.damage');
const supportSection = document.querySelector('.support');
let timer;
const onHover = (role) => {
	const roles = document.querySelector(`.${role}`);
	const roleOverlay = document.querySelector(`.${role}-overlay`);
	const roleList = document.querySelector(`.${role}list`);
	const roleTitle = document.querySelector(`.${role}-title`);
	timer = setTimeout(() => {
		roleList.style.opacity = '1';
		roleTitle.style.opacity = '0';
		// roles.style.boxShadow = 'inset 0 0 0 1000px rgba(var(--ow-greyRGB), 0.8)';
		roleOverlay.style.opacity = '0.8';
	}, 200);
};

export const onLeave = (role) => {
	const roles = document.querySelector(`.${role}`);
	const roleOverlay = document.querySelector(`.${role}-overlay`);
	const roleList = document.querySelector(`.${role}list`);
	const roleTitle = document.querySelector(`.${role}-title`);
	clearTimeout(timer);
	setTimeout(() => {
		if (roleList.style.opacity === '1') {
			roleList.style.opacity = '0';
			roleTitle.style.opacity = '1';
			// roles.style.boxShadow = 'inset 0px 0px 40px 2px var(--ow-grey)';
			roleOverlay.style.opacity = '0';
		}
	}, 200);
};
//Event Handlers
tankSection.addEventListener('mouseenter', () => {
	onHover('tank');
});
damageSection.addEventListener('mouseenter', () => {
	onHover('damage');
});
supportSection.addEventListener('mouseenter', () => {
	onHover('support');
});
tankSection.addEventListener('mouseleave', () => {
	onLeave('tank');
});
damageSection.addEventListener('mouseleave', () => {
	onLeave('damage');
});
supportSection.addEventListener('mouseleave', () => {
	onLeave('support');
});
