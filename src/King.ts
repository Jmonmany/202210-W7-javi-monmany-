import { Character } from './Character';

export class King extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        public yearsOfReign: number
    ) {
        super(name, family, age, state, message);
        state = true
        message = 'You are all going to die';
    }
}
