
const Util = require("./utils.js")

function Asteroid(pos){
    this.color = 'red';
    this.radius = 3;
    this.vel = [3,3];

};

Util.inherits(Asteroid,MovingObject);



