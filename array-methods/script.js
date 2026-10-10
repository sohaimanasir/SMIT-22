// ========= INCLUDE =========


const fruit = ["apple" , "banana" , "grapes"];

const wantedFruit = prompt("Write fruit name");

if(fruit.includes(wantedFruit)){
    console.log("Fruit added to cart")
}else{
    console.log("Fruit currently not available")
}


// ========= JOIN ==========

 const joinFruits = fruit.join(",");
 console.log(joinFruits);

//  ======== CONCAT =========

const vegetable = ["spinach" , "cabbage" , "capsicum"];
const grocery = fruit.concat(vegetable);
console.log(grocery);

// ======== isArray ==========

const isArray = Array.isArray(vegetable);
console.log(isArray);




 
