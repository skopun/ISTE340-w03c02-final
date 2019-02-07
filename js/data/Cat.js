import {Animal} from "./Animal.js";

export class Cat extends Animal {
    constructor(name, image, sound, trick) {
        super(name, 'cat', image, sound, trick);
    }

    //override
    sing() {
        return `${super.sing()} ${this._sound}.`;
    }

    //override
    doTrick() {
        return `${super.doTrick()} ${this._trick}.`;
    }
}