// Sebelum ES6 destructuring dengan cara seperti ini
const profile = {
    firstName: "Jon",
    lastName: "Doe",
};

const firstName = profile.firstName
const lastName = profile.lastName

console.log(firstName, lastName);

/* Destructuring Object */
// pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.

const month = { 
    firstMonth: "Januari",
    lastMonth: "Desember"
};

const { firstMonth, lastMonth } = month
console.log(firstMonth, lastMonth);

/* Destructuring Assignment */
const people = {
    idol: "Jang",
    country: "Korea"
};

let idol = "Wonyoung";  
let country = "Japanese";
// menginisialisasi nilai baru melalui destructuring obj
({ idol, country } = people );
console.log(idol);
console.log(country);

