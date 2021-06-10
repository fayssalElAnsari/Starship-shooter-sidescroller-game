Mini_Project: Starship
=======================

Groupe03
========
Binome : 
========
LAKEHAL Aya, EL ANSARI Fayssal et BOUTAB Mehdi

Représentation du jeu:
-----------------------
C'est un jeu vidéo simple dans lequel le joueur contrôle à l'aide du clavier le déplacement vertical d'un vaisseau situé sur la gauche de l'écran. Des soucoupes volantes arrivent de la droite de l'écran et le joueur doit les détruire en leur tirant dessus. A chaque tir réussi le joueur marque des points, à l'inverse si un vaisseau parvient à passer sans être détruit, le joueur perd des points.

Contenu de dépot
----------------
>* src qui contient :
>* assets (contient les images necessaire pour le projet)	
>* images (contient les images necessaire pour le projet)
>* scripts(contient le script du jeu dans les fichier : game.js, main.js, mobile.js, saucer.js, shoot.js, starship.js) 
>* style (fourni, contient la feuille de css )
>* index.html ( le fichier excutable)

L'Exécuction du jeu:
--------------------
1- Pour recupérer le fichier il faut se placer dans le terminal et tapez la commande 

```bash
git clone https://gitlab-etu.fil.univ-lille1.fr/elansari/el-ansari-lakehal-boutab-nom4-js.git

```
2- il faut installer les package necessaire avec la commande :

```bash
npm install
```

```bash
npm run build 
```

3- pour excuter le jeu et jouer il faut taper la commande 

```bash
npm run dev-server

```
sinon ouvrir le fichier index.html

La façon de jouer:
------------------
>* À l'aide des touches  (Haut | Bas) du clavier on peut faire bouger le vaisseau vers le haut et le bas 
>* À l'aide de la touche  espace on peut lancer les tirs .
>* La cible de gauche permet de générer un seul Saucer
>* La cible de droite permet de générer une infinité de Saucers
>* chaque tir = 200 points gangner
>* Lorsqu'une soucoupe sort du jeu par la gauche, le score est diminué de 1000 points

A VOUS DE JOUER 😎️

