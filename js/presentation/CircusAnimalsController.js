/**
 * Responds to the user input by delegating the task to the business layer. 
 * In response, the controller updates the view.
 */
import {CircusAnimalsService} from "../business/CircusAnimalsService.js";

export class CircusAnimalsController {

    /**
     * Invokes the service object to create an animal & updates the HTML page accordingly.
     * 
     * @returns {undefined}
     */
    static add() {
        //console.log("CircusAnimalsController's this: " + this); point to the html
        let animalType = prompt("Which animal would you like to add (cat/dog)?");
        let animalName = prompt("Type the animal's name!");

        //this is not working. JS optimazies out the CircusAnimalsController altough it is used here
        //this points to the Add anchor <a id="add" href="#">Add</a>
        CircusAnimalsController.service.create(animalType, animalName);

        let animalListItem = document.createElement("li");
        animalListItem.appendChild(CircusAnimalsController.service.getImage(animalName));
        animalListItem.appendChild(document.createTextNode(animalName));

        document.getElementById('animalList').appendChild(animalListItem);
        document.getElementById('log').innerHTML += "<br>" + "Add animal clicked";

    }

    /**
     * Performs a sing on the Animal collection and updates the HTML page accordingly.
     * 
     * @returns {undefined}
     */
    static sing() {
        document.getElementById('log').innerHTML += "<br>" + "SING CLICKED";
        document.getElementById('log').innerHTML += "<br>" + CircusAnimalsController.service.sing();
    }

    /**
     * Performs a doTricks on the Animal collection and updates the HTML page accordingly.
     */
    static doTricks() {
        document.getElementById('log').innerHTML += "<br>" + "DO TRICKS CLICKED";
        document.getElementById('log').innerHTML += "<br>" + CircusAnimalsController.service.doTricks();
    }
}

CircusAnimalsController.service = new CircusAnimalsService();
//OR
//let service = new CircusAnimalsService();
