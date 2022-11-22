import { Character } from './Character.js';
export class King extends Character {
    yearsOfReign;
    constructor(name, family, age, state, message, src, yearsOfReign) {
        super(name, family, age, state, message, src);
        this.yearsOfReign = yearsOfReign;
        state = true;
        message = 'You are all going to die';
    }
}
