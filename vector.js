/**
 * Created by TONY on 03.05.2015.
 */
var Vec2d = function(x, y){
    this.x = x;
    this.y = y;
};

Vec2d.prototype.add = function(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
};

Vec2d.prototype.scalar = function(scalar){
    this.x *= scalar;
    this.y *= scalar;
    return this;
};

module.exports = Vec2d;