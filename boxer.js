/**
 * Created by TONY on 02.05.2015.
 */

var Vec2d = require('./vector');
var Gopnik = require('./gopnik');

var Boxer = function(){
    Gopnik.apply(this, arguments);
    this.strange = 15;
    this.agility = 19;
    this.position = new Vec2d(190, 200);
    this.speed = new Vec2d(10, 10);
};

//Class inheritance
Boxer.prototype = Object.create(Gopnik.prototype);
Boxer.prototype.constructor = Boxer;

module.exports = Boxer;