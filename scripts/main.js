import Game from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
  let myCanvas=document.getElementById("stars");
  let game=new Game(myCanvas);
  let addSaucer=document.getElementById("nouvelleSoucoupe");
  let addRandomSaucer=document.getElementById("flotteSoucoupes");

  addRandomSaucer.addEventListener("click",game.starOrStopSaucer.bind(game));
  addSaucer.addEventListener("click",game.addSaucer.bind(game));

  window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
  window.addEventListener('keyup', game.keyUpActionHandler.bind(game));

  game.start();
}


window.addEventListener("load",init);

//
console.log('le bundle a été généré');
