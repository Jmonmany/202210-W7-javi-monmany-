import { Character } from './Character.js';

export class Fighter extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        public weapon: string,
        public dexterity: number
    ) {
        super(name, family, age, state, message);
        state = true;
        message = 'First I hit and then I ask';
    }
}
