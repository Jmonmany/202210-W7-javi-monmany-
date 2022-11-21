/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Advisor } from './Advisor.js';
import { characters } from './characters.js';
import { Fighter } from './Fighter.js';
import { King } from './King.js';
import { Squire } from './Squire.js';

// characterMessages(characters);

type stringType = {
    src: string;
    alt: string;
};

const images: stringType[] = [
    {
        src: './assets/img/joffrey.jpg',
        alt: `${characters[0].name} ${characters[0].family}`,
    },
    {
        src: './assets/img/jaime.jpg',
        alt: `${characters[1].name} ${characters[1].family}`,
    },
    {
        src: './assets/img/daenerys.jpg',
        alt: `${characters[2].name} ${characters[2].family}`,
    },
    {
        src: './assets/img/tyrion.jpg',
        alt: `${characters[3].name} ${characters[3].family}`,
    },
    {
        src: './assets/img/bronn.jpg',
        alt: `${characters[4].name} ${characters[4].family}`,
    },
];
let charactersTemplate: string[] = [];
const main = () => {
    characters.forEach((item, i) => {
        let characterTemp: string;
        characterTemp = `<li class="character col">
        <div class="card character__card">
        <img
                            src=${images[i].src}
                            alt=${images[i].alt}
                            class="character__picture card-img-top"
                            />
                            <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${characters[i].name} ${characters[i].family}
                                </h2>
                                <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Age: ${characters[i].age} years</li>
                                    <li>
                                        State:
                                        <i class="fas fa-thumbs-up"></i>
                                        </li>
                                        </ul>
                                        </div>`;
        if (i === 0) {
            characterTemp += `<div class="character__overlay">
            <ul class="list-unstyled">
            <li>Years of reign: ${(characters[i] as King).yearsOfReign}</li>
            </ul>
            <div class="character__actions">
            <button class="character__action btn" data-value = "${i}">
                                            Speak
                                            </button>
                                            <button class="character__action btn" data-value = "${i}">
                                            Die
                                            </button>
                                            </div>
                                            </div>
                                            </div>
                                            <i class="emoji">👑</i>`;
        }
        if (i === 1) {
            characterTemp += `<div class="character__overlay">
                                    <ul class="list-unstyled">
                                    <li>Weapon: ${
                                        (characters[i] as Fighter).weapon
                                    }</li>
                                        <li>Dexterity: ${
                                            (characters[i] as Fighter).dexterity
                                        }</li>
                                    </ul>
                                    <div class="character__actions">
                                    <button class="character__action btn" data-value = "${i}">
                                    Speak
                                        </button>
                                        <button class="character__action btn" data-value = "${i}">
                                            Die
                                            </button>
                                            </div>
                                </div>
                                </div>
                                <i class="emoji">🗡</i>`;
        }
        if (i === 2) {
            characterTemp += `<div class="character__overlay">
                                    <ul class="list-unstyled">
                                        <li>Weapon: ${
                                            (characters[i] as Fighter).weapon
                                        }</li>
                                        <li>Dexterity: ${
                                            (characters[i] as Fighter).dexterity
                                        }</li>
                                    </ul>
                                    <div class="character__actions">
                                        <button class="character__action btn" data-value = "${i}">
                                            Speak
                                        </button>
                                        <button class="character__action btn" data-value = "${i}">
                                            Die
                                            </button>
                                            </div>
                                            </div>
                                            </div>
                                            <i class="emoji">🗡</i>`;
        }
        if (i === 3) {
            characterTemp += `<div class="character__overlay">
                                    <ul class="list-unstyled">
                                    <li>Advising to: ${
                                        (characters[i] as Advisor).advising
                                    }</li>
                                    </ul>
                                    <div class="character__actions">
                                    <button class="character__action btn" data-value = "${i}">
                                    Speak
                                    </button>
                                    <button class="character__action btn" data-value = "${i}">
                                    Die
                                    </button>
                                    </div>
                                    </div>
                                    </div>
                                    <i class="emoji">🎓</i>`;
        }
        if (i === 4) {
            characterTemp += `<div class="character__overlay">
                                    <ul class="list-unstyled">
                                    <li>Serving to: ${
                                        (characters[i] as Squire).serving
                                    }</li>
                                    <li>Degree of sucking up: ${
                                        (characters[i] as Squire)
                                            .degreeOfSuckingUp
                                    }</li>
                                        </ul>
                                        <div class="character__actions">
                                        <button class="character__action btn" data-value = "${i}">
                                        Speak
                                        </button>
                                        <button class="character__action btn" data-value = "${i}">
                                        Die
                                        </button>
                                        </div>
                                        </div>
                        </div>
                        <i class="emoji">🛡</i>`;
        }

        characterTemp += `</div></li>`;
        charactersTemplate.push(characterTemp);
    });
    const slots = document.querySelectorAll('slot');
    slots.forEach((item, i) => (item.outerHTML = charactersTemplate[i]));

    function buttonActions(event: Event) {
        const element = event.target as HTMLElement;
        let dataButtonValue: number = +(element.dataset.value as any);
        if (element.innerText === 'Die') {
            dieFunction(element);
            return characters[dataButtonValue].death();
        }

        (comunicationDiv as HTMLDivElement).classList.add('on');
        (comunicationPgraph as HTMLParagraphElement).innerText =
            characters[dataButtonValue].report();
        (comunicationPicture as HTMLImageElement).src =
            images[dataButtonValue].src;
        (comunicationPicture as HTMLImageElement).alt =
            images[dataButtonValue].alt;

        return setTimeout(() => {
            (comunicationDiv as HTMLDivElement).classList.remove('on');
        }, 2000);
    }

    const nodeList = document.querySelectorAll('div button');
    nodeList.forEach((item) => item.addEventListener('click', buttonActions));
    const comunicationDiv = document.querySelector('.comunications');
    const comunicationPgraph = document.querySelector('.comunications__text');
    const comunicationPicture = document.querySelector(
        '.comunications__picture'
    );
};

const dieFunction = (element: HTMLElement) => {
    let i =
        element.parentElement?.parentElement?.parentElement?.children[1]
            .children[0].children[1].children[0];

    i?.classList.replace('fa-thumbs-up', 'fa-thumbs-down');

    let image =
        element.parentElement?.parentElement?.parentElement?.parentElement
            ?.children[0];
    image?.classList.add('rotate');
};

document.addEventListener('DOMContentLoaded', main);
