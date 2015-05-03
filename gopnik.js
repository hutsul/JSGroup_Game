/**
 * Created by TONY on 02.05.2015.
 */
var Vec2d = require('./vector');
var world = require('./world');

var Gopnik = function(name, raen){
    this.name = name;
    this.raen = raen; //Персонажи они не будут драться между собой если "проживают" в одном и том же раене.
    this.strange = 5; //Сила удара
    this.agility = 5; //Ловкость. Возможность нанести больше урона за один удар. Чем выше показатель тем выше урон.
    this.health = 200;
    this.position = new Vec2d(0, 0);
    this.speed = new Vec2d(5, 5); // дальность передвижения персонажа за 1 шаг
};



var damage = function(object) { //ф-я для определения нанесенного урона
    var randBoolean = Math.random()+.5| 0, //вероятность двойного удара
        damage = 0;
    if(object.agility < 10){
        return damage = object.strange;
    } else if(randBoolean) {
        return damage = object.strange*2;
    } else {
        return damage = object.strange;
    }
} ;

Gopnik.prototype.figth =  function(firstChart, secondChart) {
    if(secondChart.raen == firstChart.raen) { return console.log('Я его знаю, он из моего раена! Драки не будет!' ) }
    var firstChart = firstChart;
    var secondChart = secondChart;
    do {
       firstChart.health = firstChart.health - damage(secondChart);
       console.log('Осталось жизни у боксера = ' + firstChart.health);
       secondChart.health = secondChart.health - damage(firstChart);
       console.log('Осталось жизни у гопника = ' + secondChart.health);
    } while( secondChart.health > 0);

    if(secondChart.health <= 0){
        console.log('Боксер одержал победу!')
    } else {
        console.log('Гопник победил!')
    }
};

module.exports = Gopnik;
