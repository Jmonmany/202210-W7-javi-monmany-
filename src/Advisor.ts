import { Character } from './Character.js';

export class Advisor extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        src: string,
        public advising: string
    ) {
        super(name, family, age, state, message, src);
        state = true;
        message = "I don't know why, but I think I'm going to die soon";
    }
}
