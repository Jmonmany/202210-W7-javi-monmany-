export class Character {
    name;
    family;
    age;
    state;
    message;
    src;
    static serie;
    constructor(name, family, age, state, message, src) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.state = state;
        this.message = message;
        this.src = src;
    }
    report() {
        return this.message;
    }
    death() {
        this.state = false;
    }
}
