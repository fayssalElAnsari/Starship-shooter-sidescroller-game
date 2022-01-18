# Presentation
## Demonstration En Video
https://user-images.githubusercontent.com/15277004/149980376-54727d57-5a50-4a4c-a705-cd85723b2d0b.mp4

## Description
C'est un jeu vidéo simple dans lequel le joueur contrôle à l'aide du clavier le déplacement vertical d'un vaisseau situé sur la gauche de l'écran. Des soucoupes volantes arrivent de la droite de l'écran et le joueur doit les détruire en leur tirant dessus. A chaque tir réussi le joueur marque des points, à l'inverse si un vaisseau parvient à passer sans être détruit, le joueur perd des points.

###  La façon de jouer
* À l'aide des touches  (Haut | Bas) du clavier on peut faire bouger le vaisseau vers le haut et le bas 
* À l'aide de la touche  espace on peut lancer les tirs .
* La cible de gauche permet de générer un seul Saucer
* La cible de droite permet de générer une infinité de Saucers
* chaque tir = 200 points gangner
* Lorsqu'une soucoupe sort du jeu par la gauche, le score est diminué de 1000 points

## les principes utilisés dans ce projet
* [x] Creation d'une page html statique
* [x] Construction d'un jeu en utilisant JavaScript
* [x] Les principes de COO/POO
* [x] Les bases de CSS/HTML 

# Mise en route
## Prérequis
* <img src="https://icon-library.com/images/nodejs-icon/nodejs-icon-7.jpg" width="25">  Node.js - an open source development platform for executing JavaScript code server-side
* <img src="https://seeklogo.com/images/N/npm-logo-01B8642EDD-seeklogo.com.png" width="25">  NPM - the default package manager for the JavaScript runtime environment Node. js

## installation
* récupérer le dépôt avec:
 ```bash
 $  git clone https://github.com/fayssalElAnsari/Starship-shooter-sidescroller-game.git
 ```
 * installer les paquets *Node.js* :
  ```bash
  $  npm install
  $  npm run build
  ```
  * démarrer le serveur de développement de *Webpack*
  ```bash
  $  npm run dev-server
  ```
sinon ouvrir le fichier index.html
  
  
# hiérarchie du depot
* `src` qui contient :
  * `assets` (contient les images necessaire pour le projet)	
  * `images` (contient les images necessaire pour le projet)
  * `scripts` (contient le script du jeu dans les fichier : game.js, main.js, mobile.js, saucer.js, shoot.js, starship.js) 
  * `style` (fourni, contient la feuille de css )
  * `index.html` (le fichier excutable)

# Construit avec
* <img src="https://icon-library.com/images/nodejs-icon/nodejs-icon-7.jpg" width="25">  Node.js - An open source development platform for executing JavaScript code server-side
* <img src="https://webpack.js.org/icon-pwa-512x512.d3dae4189855b3a72ff9.png" width="25">  Webpack - A module bundler for JavaScript files to be used in a browser
* <img src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" width="25">  Express - A back end web application framework for Node.js
* <img src="https://icons-for-free.com/iconfiles/png/512/super+tiny+icons+javascript-1324450741921820748.png" width="25">  Javascript  - A programming language that is one of the core technologies on the Web
* <img src="https://freeiconshop.com/wp-content/uploads/edd/html-flat.png" width="25">  html  - The standard markup language for documents designed to be displayed in a web browser
* <img src="https://cdn-icons-png.flaticon.com/512/29/29088.png" width="25">  css - A style sheet language used for describing the presentation of a document written in html

# Auteur
* Fayssal EL ANSARI

# License
* GNU General Public License v3.0
