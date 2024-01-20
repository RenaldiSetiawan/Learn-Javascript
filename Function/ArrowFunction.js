// Arrow function hanya berupa expression function saja

// Function declaration
function sayHello(greet) {
    console.log(`${greet}`);
};

sayHello('Hallo bro');

// Function Expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`);
};

sayName('Renal');

// arrow func tidak perlu keyword function 
// Tetap menuliskan param di dalam tandak kurung di ikuit dengan panah (=>) sebelum kurung kurawal
const greeting = (name) => {
    console.log(`Hi apakabar ${name}`);
};

// apabila fungsi hanya satu param, bisa hapus tanda kurung
const greeting1 = name => {
    console.log(`Hi apakabar ${name}`);
};

greeting('Setiawan');
greeting1('Setiawan with 1 param');

// Jika sama sekali tidak membutuhkan parameter, tetap menulis tanda kurung kosong
const goodMorning = () => {
    console.log("Selamat pagi semuanya!")
};
  
goodMorning();