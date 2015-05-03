/**
 * Created by TONY on 02.05.2015.
 */

var Vec2d = require('./vector');
var randCord = function(){ // выдает рандомные координаты в диапазоне -5 .. 5;
    var min = 2, max = -1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var world = {
    wind : new Vec2d(randCord(), randCord()),
    airResistense: .9
};



module.exports = world;
