
const Util = require("./utils.js")

function Asteroid(pos){
    this.color = 'red';
    this.radius = 3;
    this.vel = [3,3];
    let options = {color:'red', radius:3, vel:Util.randomVec(3), pos:pos}
    MovingObject.call(this,options)
};

Util.inherits(Asteroid,MovingObject);



