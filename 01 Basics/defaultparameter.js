let myMultiplier=function(num1,num2){
    return num1*num2
}
console.log(myMultiplier(5,6))

// let guestUser = function(name,courseCount){
//     return 'Hello '+ name + " and your course count is "+ courseCount
// }

// console.log(guestUser("Yogesh",3))


let guestUser = function(name ="unName",courseCount=0){
    return 'Hello '+ name + " your course count is "+ courseCount
}

console.log(guestUser())