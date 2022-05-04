'use strict';

class Character {
	constructor(name, alias, age, nationality, ultimate) {
		this.name = name;
		this.alias = alias;
		this.age = age;
		this.nationality = nationality;
		this.ultimate = ultimate;
	}

	listener() {
		return document.querySelector(
			`.${this.alias.toString().toLowerCase().replace(' ', '_').replace('.', '_')}`
		);
	}
}

//ConstantVars
const tankSection = document.querySelector('.tank');
const damageSection = document.querySelector('.damage');
const supportSection = document.querySelector('.support');
let timer;
let timer2;

//Tanks
const dVA = new Character('Hana Song', 'D.Va', 19, 'Korean', 'Self Destruct');
const orisa = new Character('Orisa', 'Orisa', '1 mo', 'Numbanian', 'Supercharger');
const reinhardt = new Character('Reinhardt Wilhelm', 'Reinhardt', 61, 'German', 'Earthshatter');
const roadhog = new Character('Mako Rutledge', 'Roadhog', 48, 'Australian', 'Whole Hog');
const sigma = new Character('Siebren de Kuiper', 'Sigma', 62, 'Dutch', 'Gravitic Flux');
const winston = new Character('Winston', 'Winston', 29, 'Gorilla', 'Primal Rage');
const wreckingBall = new Character('Hammond', 'Wrecking Ball', '14 mo', 'Hamster', 'Minefield');
const zarya = new Character('Aleksandra Zaryanova', 'Zarya', 28, 'Russian', 'Graviton Surge');

//Damage
const ashe = new Character('Elizabeth Caledonia Ashe', 'Ashe', 39, 'American', 'B.O.B.');
const bastion = new Character(
	'SST Laboratories Siege Automation E54',
	'Bastion',
	30,
	'Omnic',
	'Configuration Tank'
);
const cassidy = new Character('Cole Cassidy', 'Cassidy', 37, 'American', 'Deadeye');
const doomfist = new Character('Akande Ogundimu', 'Doomfist', 45, 'Nigerian', 'Meteor Strike');
const echo = new Character('Echo', 'Echo', 'Unknown', 'Omnic', 'Duplicate');
const genji = new Character('Genji Shimada', 'Genji', 35, 'Japanese', 'Dragonblade');
const hanzo = new Character('Hanzo Shimada', 'Hanzo', 38, 'Japanaese', 'Dragonstrike');
const junkrat = new Character('Jamison Fawkes', 'Junkrat', 25, 'Australian', 'RIP-Tire');
const mei = new Character(
	'Mei-Ling Zhou',
	'Mei',
	'31 Biological, 40 Chronological',
	'Chinese',
	'Blizzard'
);
const pharah = new Character('Fareeha Amari', 'Pharah', 32, 'Egyptian', 'Barrage');
const reaper = new Character('Gabriel Reyes', 'Reaper', 58, 'American', 'Death Blossom');
const soldier76 = new Character(
	'John Francis Morrison',
	'Soldier 76',
	55,
	'American',
	'Tactical Visor'
);
const sombra = new Character('Olivia', 'Sombra', 30, 'Mexican', 'EMP');
const symmetra = new Character('Satya Vaswani', 'Symmetra', 28, 'Indian', 'Photon Barrier');
const torbjorn = new Character('Torbjörn Lindholm', 'Torbjorn', 57, 'Swedish', 'Molten Core');
const tracer = new Character('Lena Oxton', 'Tracer', 26, 'British', 'Pulse Bomb');
const widowmaker = new Character('Amélie Lacroix', 'Widowmaker', 33, 'French', 'Infra-Sight');

//Support
const ana = new Character('Ana Amari', 'Ana', 60, 'Egyptian', 'Nano Boost');
const baptiste = new Character(
	'Jean-Baptiste Augustin',
	'Baptiste',
	36,
	'Haitian',
	'Amplification Matrix'
);
const brigitte = new Character('Brigitte Lindholm', 'Brigitte', 23, 'Swedish', 'Rally');
const lucio = new Character('Lúcio Correia dos Santos', 'Lucio', 26, 'Brazilian', 'Sound Barrier');
const mercy = new Character('Angela Ziegler', 'Mercy', 37, 'Swiss', 'Valkyrie');
const moira = new Character(`Moira O'Deorain`, 'Moira', 48, 'Irish', 'Coalescence');
const zenyatta = new Character('Tekhartha Zenyatta', 'Zenyatta', 20, 'Omnic', 'Transcendence');

const onLeaveChar = (role) => {
	const roleList = document.querySelector(`.${role}list`);
	const roleTitle = document.querySelector(`.${role}-title`);
	const roleOverlay = document.querySelector(`.${role}-overlay`);
	clearTimeout(timer);
	setTimeout(() => {
		roleList.style.opacity = '0';
		roleTitle.style.opacity = '1';
		roleOverlay.style.opacity = '0';
	}, 1000);
};
const onLeaveSection = (role) => {
	const info = document.querySelector(`.information-${role}`);
	const roleList = document.querySelector(`.${role}list`);
	if (info.classList.contains(`active-${role}`)) {
		const active = document.querySelector(`.active-${role}`);
		active.style.transform = 'translate(130%)';
		timer = setTimeout(() => {
			onLeaveChar(`${role}`);
			roleList.style.transform = 'translate(0)';
			active.style.opacity = '0';
			info.classList.remove(`active-${role}`);
			info.innerHTML = '';
		}, 1600);
	}
};
const onLeaveClose = (role) => {
	const info = document.querySelector(`.information-${role}`);
	const roleList = document.querySelector(`.${role}list`);
	const active = document.querySelector(`.active-${role}`);
	active.style.transform = 'translate(130%)';
	timer = setTimeout(() => {
		roleList.style.transform = 'translate(0)';
		roleList.style.opacity = '1';
		active.style.opacity = '0';
		info.classList.remove(`active-${role}`);
		info.innerHTML = '';
	}, 1600);
};

const onClick = (obj, role) => {
	const info = document.querySelector(`.information-${role}`);
	const roles = document.querySelector(`.${role}`);
	const roleList = document.querySelector(`.${role}list`);
	info.classList.add(`active-${role}`);
	const active = document.querySelector(`.active-${role}`);
	info.innerHTML = `
    <button class="close">X</button>
    <img class="main-bg" src="./photos/${obj.alias.replace('.', '').replace(' ', '')}-crop.jpg" />
    <p>Name:<span>${obj.name}</span></p>
    <p>Alias:<span>${obj.alias}</span></p>
    <p>Age:<span>${obj.age}</span></p>
    <p>Nationality:<span>${obj.nationality}</span></p>
    <p>Ultimate:<span>${obj.ultimate}</span></p>`;
	roleList.style.opacity = '0';
	timer = setTimeout(() => {
		roles.style.background = `no-repeat url(../photos/${obj.alias
			.replace('.', '')
			.replace(' ', '')}-cover.jpg)`;
		roles.style.backgroundSize = 'cover';
		roles.style.backgroundPosition = '50% 20%';
		timer2 = setTimeout(() => {
			roleList.style.transform = 'translate(-130%)';
			active.style.transform = 'translate(0)';
			active.style.opacity = '1';
		}, 300);
	}, 1000);
	document.querySelector('.close').addEventListener('click', () => {
		onLeaveClose(`${role}`);
	});
};
//Tanks
dVA.listener().addEventListener('click', () => {
	onClick(dVA, 'tank');
});
orisa.listener().addEventListener('click', () => {
	onClick(orisa, 'tank');
});
reinhardt.listener().addEventListener('click', () => {
	onClick(reinhardt, 'tank');
});
roadhog.listener().addEventListener('click', () => {
	onClick(roadhog, 'tank');
});
sigma.listener().addEventListener('click', () => {
	onClick(sigma, 'tank');
});
winston.listener().addEventListener('click', () => {
	onClick(winston, 'tank');
});
wreckingBall.listener().addEventListener('click', () => {
	onClick(wreckingBall, 'tank');
});
zarya.listener().addEventListener('click', () => {
	onClick(zarya, 'tank');
});
tankSection.addEventListener('mouseleave', () => {
	onLeaveSection('tank');
});

//Damage
ashe.listener().addEventListener('click', () => {
	onClick(ashe, 'damage');
});
bastion.listener().addEventListener('click', () => {
	onClick(bastion, 'damage');
});
cassidy.listener().addEventListener('click', () => {
	onClick(cassidy, 'damage');
});
doomfist.listener().addEventListener('click', () => {
	onClick(doomfist, 'damage');
});
echo.listener().addEventListener('click', () => {
	onClick(echo, 'damage');
});
genji.listener().addEventListener('click', () => {
	onClick(genji, 'damage');
});
hanzo.listener().addEventListener('click', () => {
	onClick(hanzo, 'damage');
});
junkrat.listener().addEventListener('click', () => {
	onClick(junkrat, 'damage');
});
mei.listener().addEventListener('click', () => {
	onClick(mei, 'damage');
});
pharah.listener().addEventListener('click', () => {
	onClick(pharah, 'damage');
});
reaper.listener().addEventListener('click', () => {
	onClick(reaper, 'damage');
});
soldier76.listener().addEventListener('click', () => {
	onClick(soldier76, 'damage');
});
sombra.listener().addEventListener('click', () => {
	onClick(sombra, 'damage');
});
symmetra.listener().addEventListener('click', () => {
	onClick(symmetra, 'damage');
});
torbjorn.listener().addEventListener('click', () => {
	onClick(torbjorn, 'damage');
});
tracer.listener().addEventListener('click', () => {
	onClick(tracer, 'damage');
});
widowmaker.listener().addEventListener('click', () => {
	onClick(widowmaker, 'damage');
});
damageSection.addEventListener('mouseleave', () => {
	onLeaveSection('damage');
});

//Support;
ana.listener().addEventListener('click', () => {
	onClick(ana, 'support');
});
baptiste.listener().addEventListener('click', () => {
	onClick(baptiste, 'support');
});
brigitte.listener().addEventListener('click', () => {
	onClick(brigitte, 'support');
});
lucio.listener().addEventListener('click', () => {
	onClick(lucio, 'support');
});
mercy.listener().addEventListener('click', () => {
	onClick(mercy, 'support');
});
moira.listener().addEventListener('click', () => {
	onClick(moira, 'support');
});
zenyatta.listener().addEventListener('click', () => {
	onClick(zenyatta, 'support');
});
supportSection.addEventListener('mouseleave', () => {
	onLeaveSection('support');
});

//Random Character Image
const randomPic = (arr, role) => {
	const randomNum = Math.floor(Math.random() * arr.length);
	const roles = document.querySelector(`.${role}`);
	roles.style.background = `no-repeat url(../photos/${arr[randomNum]
		.replace('.', '')
		.replace(' ', '')}-cover.jpg)`;
	roles.style.backgroundSize = 'cover';
	roles.style.backgroundPosition = '50% 20%';
};

const tankArr = [...document.querySelectorAll('.tankchar')].map((e) => e.innerHTML);
const damageArr = [...document.querySelectorAll('.damagechar')].map((e) => e.innerHTML);
const supportArr = [...document.querySelectorAll('.supportchar')].map((e) => e.innerHTML);

randomPic(tankArr, 'tank');
randomPic(damageArr, 'damage');
randomPic(supportArr, 'support');
