// Destructuring array menggunakan kurung siku []
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourtFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourtFood);

// Jika ingin mengambil nilai ketiga dari array 
// dengan membiarkan index yg tidak diinginkan tetap kosong tanpa menulis variable lokal
const number = [ 1, 2, 3, 4, 5 ];
const [ , , indexDua ] = number;

console.log(indexDua);

/* Destructuring Assignment */
const restaurant = ["Seafood", "Salad"];

let myFood = "Indomie";
let myDrink = "Juice";

[myFood, myDrink] = restaurant;

console.log(myFood);
console.log(myDrink);