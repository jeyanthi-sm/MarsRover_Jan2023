# TypeScript Mars Rover project 

This repository has the code to make the rover navigate from x y coordinates in the Plateau from specific facing direction for the given instructions.

## Instructions
This app is to move the rover in the plateau from the given coordinates 
and facing direction and gives the end coordinates by following the 
instructions

The instructions 
First, fork and clone this repository.

Then run this command:

npm install

You can then run

npm start

Then you can run

npm test

followed by npm run build


❗ NOTE: If you look in `package.json` you'll see that `npm start` is actually just an alias for `nodemon index.ts`. Using the [nodemon tool](https://www.npmjs.com/package/nodemon) means you don't have to stop and start the application every time you change the code. Nodemon will automatically spot when files have changed and restart your application. 

If you ever need to actually stop your application you can press the key combination `Ctrl + C` to interrupt and kill the application.


You should see a welcome message 

## Beginning your Mars Rover Navigation

The applicatiohn is to move rover around the surface of Mars. The Surface of the mars is represented by plateau. The assumption is plateau to be a rectangle/square The rover position is represented by x and y coordinates and the letters N, E,S,W to represents its facing direction. The instructio is to move the rover on the surface. The instruction can be L for left turn, R - Right turn and M - Move. The Rover can be move only one grid at a time. If it is facing N then it moves x,y+1.

At any time if you want to quit then use ctr+c to quit the application

Enjoy the mars navigation.

