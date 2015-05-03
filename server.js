/**
 * Created by TONY on 02.05.2015.
 */

var express = require('express');
var app = express();

var Gopnik = require('./gopnik');
var Boxer = require('./boxer');
var Vec2d = require('./vector');
var world = require('./world');
var coords = require('./rout');

var gopnik = new Gopnik('Vasya', 'Saltovka');
var boxer = new Boxer('Fomin', 'XT3');

app.get('/moveto', function(req, res){
    var step = 0;

    if(check() == false){
        //перемещение гопника
        gopnik.speed.add(world.wind);
        gopnik.position.add(gopnik.speed);
        gopnik.position.x += coords.firstCord[step][0];
        gopnik.position.y += coords.firstCord[step][1];
        var gopnikX = Math.round(gopnik.position.x);
        var gopnikY = Math.round(gopnik.position.y);

        //перемещение боксера
        boxer.speed.add(world.wind);
        boxer.position.add(boxer.speed);
        boxer.position.x -= coords.secondCord[step][0];
        boxer.position.y -= coords.secondCord[step++][1];
        var boxerX = Math.round(boxer.position.x);
        var boxerY = Math.round(boxer.position.y);
        res.send('Гопник в пути' + ' ' + 'x ='+ gopnikX +' '+ 'y= '+ gopnikY +
        'Боксер в пути' + ' ' + 'x ='+ boxerX +' '+ 'y= '+ boxerY);
    } else {
        gopnik.figth(boxer, gopnik);
    }
});

var check = function() {

    var GOPNIK_VISIBLE = 7.07;
    var BOXER_VISIBLE = 14.14;
    var MAX_VISIBLE = GOPNIK_VISIBLE + BOXER_VISIBLE; // максимальное расстояние при котором игроки увидят друг друга и начнется бой

    //находим расстояние между позициями Гопника и Боксера
    var distanceBetweenOpponents = function(){
        var posX = boxer.position.x - gopnik.position.y;
        var posY = boxer.position.y - gopnik.position.y;
        return Math.sqrt(Math.pow(posX, 2) - Math.pow(posY, 2));
    };

    // если максимальное расстояние меньше растояние между персонажами то бой начинается
    if(MAX_VISIBLE <= distanceBetweenOpponents()){
        console.log(MAX_VISIBLE - distanceBetweenOpponents());
        return true
    } else return false
};

app.listen(3000, function () {
    console.log('Server start on port = 3000');
});