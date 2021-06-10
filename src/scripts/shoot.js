import Mobile from './mobile.js';
import srcImage from '../assets/images/tir.png';

/**
 * the Shoot class represents a moving laser bullet and IS A mobile
 * the src image isn't defined in the constructor but only the spawning position 
 * since it will always have the same srcImage as imported above
 */
export default class Shoot extends Mobile {

  /**
   * default constructor for hte shoot takes in only two params
   * @param {*} x the spawning x position in the canvas
   * @param {*} y the spawning y position in the canvas
   */
  constructor(x,y){
    super(x,y,8,0,srcImage);
  }
  /**
   * returns true if the shoot is in collision with the saucer
   * @param {*} saucer
   * @returns
   */
  collisionWith(saucer){
    return saucer.inSide(this.x,this.y);
}
/**
 * delete the laser bulletand if the saucer was hit by the bullter he will be deleted and wil set up the score with 200 points
 * @param {*} saucer
 * @param {*} game
 */
removeIfcheck(saucers,game){
  let sau=saucers.filter(saucer => this.collisionWith(saucer)).forEach(s=>{
    game.deleteShoot(this);// delete the laser bullet
    game.deleteSaucer(s);// delete the saucer that was hit by the bullet
    game.setScore(200);
  });
}
}
