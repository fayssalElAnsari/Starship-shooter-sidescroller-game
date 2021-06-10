/**
 * this is the mobile class which describes a moving image in the canvas
 */
export default class Mobile {

    /**
     * the constructor for the Mobile class
     * @param {*} x the spawning x position relative to the x axis
     * @param {*} y the spawning y position relative to the y axis
     * @param {*} deltaX the default speed in direction x
     * @param {*} deltaY the default speed in direction y
     * @param {*} img the image src
     */
    constructor(x, y, deltaX, deltaY, img) {
      this.x = x;
      this.y = y;
      this.deltaX = deltaX;
      this.deltaY = deltaY;
      this.img = new Image();
      this.img.src = img;
    }

    /**
     * will draw the mobile with the rendering context provided as a parameter
     * @param {*} myCanvas
     */
    draw(myCanvas){
        const context = myCanvas.getContext("2d");
        context.drawImage(this.img, this.x,this.y);
    }

    /**
     * will apply an elementary displacement to the mobile,
     * that is to say a modification of its coordinates according to its displacement steps
     * for example for the saucer when each saucer gets outside (x<0) it will be deleted 
     */
    move(myCanvas){
      let width = myCanvas.width;
      let height = myCanvas.height;
      // to not get out of the canvas limits when moving the mobile object
      // if(0 < this.x+this.deltaX && this.x+this.deltaX < width){
        this.x += this.deltaX;
      // }
      // if(0 < this.x+this.deltaY && this.x+this.deltaY < height)
        this.y += this.deltaY;
    }
  }
