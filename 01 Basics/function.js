// let sayHello = function(){
//     console.log("Greeting message for user");
//     console.log("Hey user")
// }

// sayHello()

let sayHello = function(name){
    console.log("Greeting message for user");
    console.log(`Hey ${name}`)
}

sayHello('John')

let fullNameMaker= function(firstName,lastName){
    console.log("Welcome to lco")
    console.log(` Happy to have you ${firstName} ${lastName}`)
}
fullNameMaker("John","Doe")

let myAdder=function(num1,num2) {
    let added = num1 + num2
    return added 
}

result = myAdder(3,5)
console.log(result)