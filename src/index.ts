import { Advisor } from './Advisor.js';
import { characters } from './characters.js';
import { Fighter } from './Fighter.js';
import { King } from './King.js';
import { Squire } from './Squire.js';

const charactersTemplate: string[] = [];
const main = () => {
    characters.forEach((item, i) => {
        let characterTemp: string;
        characterTemp = `<li class="character col">
        <div class="card character__card">
                            <img
                            src=${characters[i].src}
                            alt=${characters[i].name}${characters[i].family}
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
        if (characters[i] instanceof King) {
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
        if (characters[i] instanceof Fighter) {
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
        if (characters[i] instanceof Advisor) {
            characterTemp += `<div class="character__overlay">
                                    <ul class="list-unstyled">
                                    <li>Advising to: ${
                                        (characters[i] as Advisor).advising.name
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
        if (characters[i] instanceof Squire) {
            characterTemp += `<div class="character__overlay">
                                    <ul class="list-unstyled">
                                    <li>Serving to: ${
                                        (characters[i] as Squire).serving.name
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
        const dataButtonValue = +(element.dataset.value as string);
        if (element.innerText === 'Die') {
            dieFunction(element);
            return characters[dataButtonValue].death();
        }

        (comunicationDiv as HTMLDivElement).classList.add('on');
        (comunicationPgraph as HTMLParagraphElement).innerText =
            characters[dataButtonValue].report();
        (comunicationPicture as HTMLImageElement).src =
            characters[dataButtonValue].src;
        (comunicationPicture as HTMLImageElement).alt =
            characters[dataButtonValue].name +
            characters[dataButtonValue].family;

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
    const i =
        element.parentElement?.parentElement?.parentElement?.children[1]
            .children[0].children[1].children[0];

    i?.classList.replace('fa-thumbs-up', 'fa-thumbs-down');
    const image =
        element.parentElement?.parentElement?.parentElement?.parentElement
            ?.children[0];
    image?.classList.add('rotate');
};

document.addEventListener('DOMContentLoaded', main);
