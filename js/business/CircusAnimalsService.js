/**
 * This class exposes services that the components in the presentation layer may
 * need and consume. CircusAnimalsService does not know anything about the different
 * animal types nor data used in this application. This class interacts with the 
 * Data Layer (AnimalFactory) and should be ignorant of the Animal's concrete classes.
 * 
 * @type type
 */

import {AnimalFactory} from "../data/AnimalFactory.js";
import {Animals} from "../data/Animals.js";

export class CircusAnimalsService {
    constructor() {
        this._animals = new Animals();
        this._errors = [];
    }

    create(animalType, animalName) {
        let animal = AnimalFactory.create(animalType, animalName);
        this._animals.add(animal);
        console.log(AnimalFactory.errors);
    }

    sing() {
        return this._animals.sing();
    }

    doTricks() {
        return this._animals.doTricks();
    }

    getImage(animalName) {
        return this._animals.get(animalName).image;
    }

}