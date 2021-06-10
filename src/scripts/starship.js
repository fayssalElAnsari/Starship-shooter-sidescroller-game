import Mobile from './mobile.js';
import srcImage from '../assets/images/vaisseau-ballon-petit.png';

//creer l'objet Movestate avec les 3 atrributs UP, DOWN et NONE
const MoveState = { UP : 0, DOWN : 1, NONE : 2};

/**
 * the Starship class which IS A Mobile
 * it represents the drawing the player will be controling and it will have a different default speed from the one given by the player
 */
export default class StarShip extends Mobile {

    /**
     * the default constrctor for the Starship class
     * it has a default image not passed in as a param in the constructor 
     * @param {*} x the x spawning location
     * @param {*} y the y spawning location
     */
    constructor(x, y) {
        super(x, y, 0, 3, srcImage);
        this.moving = MoveState.NONE;
      }
      /**
      * the result true / false depends on the moving state of the starship
      * return true if moving up
      */
      getUp() {
          return (this.moving == MoveState.UP);
      }

      /**
       * the result true / false depends on the moving state of the starship
       * return true if moving down false if not
       */
      getDown() {
        return (this.moving == MoveState.DOWN);
      }

      /**
       * Move up the starship
       */
      moveUp () {
        this.moving = MoveState.UP;
      }

      /**
       * Move down the starShip
       */
      moveDown () {
        this.moving = MoveState.DOWN;
      }
          /* Set the starship moving on None, sot the starship doesn't move */
      stopMoving(){
        this.moving = MoveState.NONE;
      }
      /* Move the starship Down or Up 
      * @param {*} myCanvas
      */
      move(myCanvas){
        if(this.getDown()){
          this.y = Math.min(this.y + this.deltaY, myCanvas.height-this.img.height);
        }

        if(this.getUp()){
          this.y = Math.max(this.y - this.deltaY, 0);
        }
      }




}
