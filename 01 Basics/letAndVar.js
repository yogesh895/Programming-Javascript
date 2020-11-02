// var and let are both used for variable declaration 
// in javascript but the difference between them is that 
// var is function scoped and let is block scoped. 
// It can be said that a variable declared with var is 
// defined throughout the program as compared to let.

var iAmGlobal= "Some value"
if(true)
{
    let iAmLocal="Another value"
    console.log(iAmGlobal);
    console.log(iAmLocal);


}

    console.log(iAmGlobal);
    console.log(iAmLocal);