export class Animal {
    /**
     * Creates an animal object.
     * 
     * @param {String} name of the animal
     * @param {String} type of the animal
     * @param {Image} image of the animal
     * @param {String} sound
     * @param {String} trick
     * @returns {Animal}
     */
    constructor(name, type, image, sound, trick) {
        this._name = name;
        this._type = type;
        this._image = image;
        this._sound = sound;
        this._trick = trick;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get image() {
        return this._image;
    }

    sing() {
        let singString = `${this._name} the ${this._type} sings `;
        return singString;
    }

    doTrick() {
        let doTricksString = `${this._name} the ${this._type} `;
        return doTricksString; //to be overriden  
    }

    //static method
    static getVersion() {
        return "w03c1";
    }
}

//static property
Animal.maxHight = 2000;