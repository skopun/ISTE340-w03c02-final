export class Animals {
    constructor() {
        this._animals = [];
    }

    get animals() {
        return this._animals;
    }

    add(animal) {
        this._animals.push(animal); //The push() method adds new items to the end of an array, and returns the new length.
    }

    /**
     * Returns an animal based on the animal name.
     * 
     * @param {String} animalName
     * @returns {Animal}
     */
    get(animalName) {
        for (let animal of this._animals) {
            if (animal.name === animalName) {
                return animal;
            }
        }
    }

    sing() {
        let log = "";
        //Note: for...in will iterate over Array indexes!
        let animal;
        for (let i = 0; i < this._animals.length; i++) {
            animal = this._animals[i];
            log += animal.sing() + "<br/>";
        }
        return log;
    }

    //DRY Violated!!!!!
    //doSomething(indicator) indicator = 'sing'/'doTricks'
    doTricks() {
        let log = "";
        let animal;
        for (let i = 0; i < this._animals.length; i++) {
            animal = this._animals[i];
            log += animal.doTrick() + "<br/>";
        }
        return log;
    }

    length() {
        return this._animals.length;
    }
}