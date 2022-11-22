import { Character } from './Character.js';
export class Squire extends Character {
    serving;
    degreeOfSuckingUp;
    constructor(
        name,
        family,
        age,
        state,
        message,
        src,
        serving,
        degreeOfSuckingUp
    ) {
        super(name, family, age, state, message, src);
        this.serving = serving;
        this.degreeOfSuckingUp = degreeOfSuckingUp;
        message = "I'm a loser";
    }
}
