import { Character } from './Character.js';
export class Fighter extends Character {
    weapon;
    dexterity;
    constructor(name, family, age, state, message, src, weapon, dexterity) {
        super(name, family, age, state, message, src);
        this.weapon = weapon;
        this.dexterity = dexterity;
        state = true;
        message = 'First I hit and then I ask';
    }
}
