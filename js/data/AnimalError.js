/**
 * Class to store error message related to wrong user type selection, or to an 
 * error encountered while loading animal data.
 * 
 * @type type
 */
export class AnimalError {
    constructor(message) {
        this._message = message;
    }
    
    get message(){
        return this._message;
    }
}

