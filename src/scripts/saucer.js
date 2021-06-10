import Mobile from './mobile.js';
import srcImage from '../assets/images/flyingSaucer-petit.png';

/**
 * the Saucer class which IS A mobile
 * it has the default x=-3 and y=0 speeds 
 * and takes in the srcImage provided in the project
 */
export default class Saucer extends Mobile {

  /**
   * default constructor for hte Saucer class
   * @param {*} x is the spawning x position
   * @param {*} y is the spawning y position
   * @param {*} game is the game to which the 
   *              created Saucer object should be linked to
   */
  constructor(x,y,game){
    super(x,y,-3,0,srcImage);
    this.game=game;
  }
  /**
   * Moves canvas
   * @param {*} myCanvas
   */
  move(myCanvas){
    super.move(myCanvas);
    if(this.x<=0){
      this.game.deleteSaucer(this);
      this.game.setScore(-1000);
    }
  }

  /**
   * return true if the shoot is inside the saucer false if not
   * @param {*} otherX the other X position to be compared to this x position
   * @param {*} otherY the other Y position to be compared this y position
   * @returns
   */
  inSide(otherX,otherY){
    return (otherX >= this.x && otherX <=(this.x+this.img.width) && otherY >= this.y && otherY <= (this.y+this.img.height));
  }

}
