/**
 * AnimalFactory is responsible of creating different types of animals. This 
 * approach enables to create the objects without exposing the instantiation 
 * logic to the client (outside world) and presents a single point of entry to
 * deal with the instantiation process.
 * 
 * Users of this class can create families of related objects without any 
 * knowledge of their concrete classes. 
 */
import {Type} from "./Type.js";
import {Cat} from "./Cat.js";
import {Dog} from "./Dog.js";
import {animalData} from "./animalData.js";
import {AnimalError} from "./AnimalError.js";


export class AnimalFactory {

    static create(type, name) {
        try {


            //console.log("AnimalFactory's this: " + this);
            let data = this.dataSource[type]; //ERROR: animalData.type
            let image = this.createImage(data.smallImage, data.largeImage);

            let animal;
            switch (type) {
                case Type.CAT:
                    animal = new Cat(name, image, data.sound, data.trick);
                    break;
                case Type.DOG:
                    animal = new Dog(name, image, data.sound, data.trick);
                    break;
                default:
                    this.errors.push(new AnimalError("The animal type does not exist"));
                    return;
            }

            return animal;
        }catch (e) {
            this.errors.push(new AnimalError("The animal type does not exist. Error: "+e.message));
        }
    }

    static createImage(smallImage, largeImage) {
        let image = new Image();

        image.src = smallImage;

        image.addEventListener("mouseover", function () {
            this.src = largeImage;
        });

        image.addEventListener("mouseout", function () {
            this.src = smallImage;
        });

        return image;
    }
}

//static property
AnimalFactory.dataSource = animalData;
AnimalFactory.errors = []