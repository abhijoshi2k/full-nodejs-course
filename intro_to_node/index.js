const superheroes = require('superheroes');
var supervillains = require('./node_modules/supervillains');

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();
console.log(mySuperheroName);
console.log(mySupervillainName);