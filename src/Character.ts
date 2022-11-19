interface Person {
    report: () => void;
    death: () => void;
}

export class Character implements Person {
    static serie: 'Game of Thrones';
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public state: boolean,
        public message: string
    ) {}
    report() {
        return this.message;
    }
    death() {
        this.state = false;
    }
}
