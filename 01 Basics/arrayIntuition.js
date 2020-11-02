const numbers=['one','two','three','four','five','six']

// numbers[1]= 'Something'
// console.log(numbers);

//START

// console.log(numbers.shift()) //deletes first element(shift method)
// console.log(numbers);

// numbers.unshift('Something') //inserts first element(unshift method)
// console.log(numbers);

//END
console.log("The element to be deleted is:" + numbers.pop())
console.log(numbers); //Pop(deletes) the end element

// numbers.push('Seven')
// console.log(numbers)   //add element in the end

//MIDDLE

// numbers.splice(2,2,'Something')
// console.log(numbers);