import { Character } from './Character.js';
import { Fighter } from './Fighter.js';

export class Squire extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        src: string,
        public serving: Fighter,
        public degreeOfSuckingUp: number
    ) {
        super(name, family, age, state, message, src);
        message = "I'm a loser";
    }
}
