import StarShip from './starship.js';
import Mobile from './mobile.js';
import Saucer from './saucer.js';
import Shoot from './shoot.js';

/**
 * this is the game class which will hold the objects and methods
 * that are directly related to the Game
 */
export default class Game {
    constructor(myCanvas){
        this.myCanvas = myCanvas;
        this.height = myCanvas.height;
        this.width = myCanvas.width;
        this.saucers = Array();
        this.shoots = Array();
        this.score = 0;
        this.starShip = new StarShip(40,this.height/2);
        this.starShip.draw(myCanvas);
        this.raf=undefined;
        this.create=undefined;
        this.floor=undefined;
      }
    /* get the height of canva */
    getHeight(){
      return this.height;
      }

    /* get the width of canva */
    getWidth(){
      return this.width;
    }
    /* Move and Draw the Canvas */
    moveAndDraw(){
        const context = this.myCanvas.getContext("2d");
        context.clearRect(0,0,this.myCanvas.width,this.myCanvas.height);
        this.starShip.move(this.myCanvas);
        this.starShip.draw(this.myCanvas);
        this.saucers.forEach(
          saucer =>{
        saucer.draw(this.myCanvas);
        saucer.move(this.myCanvas);
      });
      this.shoots.forEach(elt => {
        elt.move(this.myCanvas);
        elt.draw(this.myCanvas);
        elt.removeIfcheck(this.saucers,this);
      });
      this.raf=window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }
    /**
     * starts out the game
     */
    start(){
      this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }
    /**
     * adds a laser bullet to the canvas from the position fo the starship 
     * and also adds it to the array of shoots
     */
    addShoot(){
      let shoot = new Shoot (this.starShip.x+40,this.starShip.y+10);
      this.shoots.push(shoot);
    }
    /**
    * delete a shoot passed on parametre from  the list of shoots
    */
    deleteShoot(shoot){
      this.shoots.splice(this.shoots.indexOf(shoot), 1);
    }
    /**
    * delete saucer passed on parametre from  the list of saucers
    */
    deleteSaucer(saucer){
      this.saucers.splice(this.saucers.indexOf(saucer), 1);
    }
    /**
    * Adding Saucers randomely
    */
    randomAddSaucer(){
      let temps=Math.floor(Math.random()*Math.floor(2));
      if(temps ===0){
        this.addSaucer()
      }
      document.getElementById("flotteSoucoupes").blur();
    }
    /**
     * toggles the start or stop of spawning of saucers in the canvas
     */
    starOrStopSaucer(){
      if(this.create){
        clearInterval(this.create);
        this.create=undefined;
      }else{
        this.createSaucer();
      }
    }
    /**
    * Create the saucer
    */
    createSaucer(){
      this.create=window.setInterval(this.randomAddSaucer.bind(this),750);
    }
    /**
    * add a new saucer in the list of saucers
    */
    addSaucer(){
      let ordSaucer=Math.random()*this.myCanvas.height-35;
      let saucer=new Saucer(this.width,ordSaucer,this);
      this.saucers.push(saucer);
      document.getElementById("nouvelleSoucoupe").blur();
    }
    /**
    * add a shot in the new list of shoots
    */
    setScore(point){
      this.score+=point;
      document.getElementById('score').innerHTML=this.score;
    }
   /**
   * Handles key presses.
   *
   * If arrow up is pressed, the ship is set to move up.
   * If arrow down is pressed, the ship is set to move down.
   *
   * @param {*} event the event triggered by pressing a key
   */
    keyDownActionHandler(event) {
      switch (event.key) {
            case " ":
            this.addShoot();
            break;
            case "ArrowDown":
            case "Down":
                this.starShip.moveDown();
                break;
            case "ArrowUp":
            case "Up":
                this.starShip.moveUp();
                break;
            default: return;
        }
        event.preventDefault();
      }
      /**
      * Handles key releases.
      *
      * @param {*} event the event triggered by pressing a key
      */
      keyUpActionHandler(event) {
        switch (event.key) {
          case "ArrowUp":
          case "Up":
          case "ArrowDown":
          case "Down":
          this.starShip.stopMoving();
          break;
          default: return;
        }
        event.preventDefault();
      }

    }
