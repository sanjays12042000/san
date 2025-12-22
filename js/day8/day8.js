// spread operator in arrays
// copy
// var arr = [1, 2, 3];
// var arr1 = [...arr, 4];

// console.log(...arr1); // 1 2 3 4 5

// cancatenate
//  var arr2 = [5, 6, 7];
//  var arr3 = [1, 2, 3, 4,];

//  console.log(...arr3, ...arr2);
 

// spread operator in objects
// var obj1 = {
//     name: "VC Pranav",
//     age : 17
// }
// var obj2 = {
//     ...obj1,
//     school: "Sri  chaitanya",
// }
// var obj3 = {...obj1, ...obj2};


// console.log(obj2);


// rest operator

// function add(a,b, ...c){
//   console.log(a,b,c);
//   console.log(a,b,...c);   // spread operator
// }

// add(10, 20, 30, 40, 50)

// spring methods

// var str = " hi welcome to javascript ";

// console.log(str.length);
// console.log(str.trim());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split());
// console.log(str.concat(" love coding"));
// console.log(str.indexOf("e"));
// console.log(str.replace("hi", "hello"));

// Destructuring

// array destructuring
// var arr = [10, 20, 30, 40, 50];

// var [a,b,c] = arr;
// console.log(a+c);

// object destructuring

// let obj = {
//     name: "keerthiraj",
//     Age: 26,
//     city: "Bangalore",
//     gender: "male",
//     profession: "developer",
// }

// let {Age, city} = obj;
// console.log(Age, city);


// array methods

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map
//  var arr1 = arr.map((e) =>{
//     console.log(e);
    
//     return e;
    
//  })
// console.log(arr1);

// filter
// var filterData =arr.filter((e) =>{
//     return e % 2 == 0;  // even
//     return e % 2 != 0; // odd
// });
// console.log(filterData);

// reduce

var sum = arr.reduce((acc, curr) =>{
     console.log(acc, curr);
     return acc + curr;
    
});

console.log(sum);
