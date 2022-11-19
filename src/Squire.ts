import { Character } from './Character.js';

export class Squire extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        public serving: string,
        public degreeOfSuckingUp: number
    ) {
        super(name, family, age, state, message);
        message = "I'm a loser";
    }
}
