import { Character } from './Character.js';
export class Advisor extends Character {
    advising;
    constructor(name, family, age, state, message, src, advising) {
        super(name, family, age, state, message, src);
        this.advising = advising;
        state = true;
        message = "I don't know why, but I think I'm going to die soon";
    }
}
