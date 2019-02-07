/**
 * INITIALIZES THE SYSTEM.
 * 
 * window.onload is fired when the entire page loads, including its content 
 * (images, css, scripts, etc.)
 *      
 * document.onload is fired when the DOM is ready which can be prior to images 
 * and other external content is loaded
 * 
 * In general, document.onload event is fired before the window.onload
 */
import {CircusAnimalsController} from "./presentation/CircusAnimalsController.js";
import * as ELEMENTS from "./presentation/elements.js"
window.onload = function () {
   ELEMENTS.ELEMENT_ADD_LISTITEM.onclick = CircusAnimalsController.add;
    ELEMENTS.ELEMENT_SING_LISTITEM.onclick = CircusAnimalsController.sing;
    ELEMENTS.ELEMENT_DOTRICKS_LISTITEM.onclick = CircusAnimalsController.doTricks;

};

