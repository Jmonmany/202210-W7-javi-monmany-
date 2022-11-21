import { Character } from './Character.js';

export class King extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        src: string,
        public yearsOfReign: number
    ) {
        super(name, family, age, state, message, src);
        state = true;
        message = 'You are all going to die';
    }
}
