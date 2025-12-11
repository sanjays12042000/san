// console.log("step 1");
// console.log("step 2");
// async function add() {
//     const data =await "step 3"
//   console.log(data);
// }
// add()
// console.log("step 4");


// async/await

// async function fetchData() {
//     const res =await fetch("https://dummyjson.com/products");
//     const data =await res.json();
//     console.log(data);
    
// }
// fetchData();


// Error handliing

 async function fetchData() {
   try {
     const res =await fetch("https://dummyjson.com/products");
    const data =await res.json();
    console.log(data);
   } catch (error) {
    console.log(`internal server error ${error}`);
    
   }
 }

 fetchData();