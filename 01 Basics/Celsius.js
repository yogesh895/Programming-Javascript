// var and let are both used for variable declaration 
// in javascript but the difference between them is that 
// var is function scoped and let is block scoped. 
// It can be said that a variable declared with var is 
// defined throughout the program as compared to let.
var score=100
var bonus=40
let totalScore= score+bonus
console.log(totalScore)

var a= 100
var b=56

var finalScore= (a+score) * b + bonus
console.log(finalScore)

var c=500
var f=((9/5) * c) + 32

console.log(f)


