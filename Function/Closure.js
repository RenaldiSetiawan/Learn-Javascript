// Suatu fungsi yang dapat mengakses variabel didalam lexical scope di sebut clousure
function  init() {
    const name = 'Wan';

    function greet() {
        console.log(`Hallo, ${name}`);
    };
    greet();
};
init();

// js tidak memiliki cara untuk mendeklarasikan suatu fungsi / variable menjadi private
// sehingga fungsi atau variable bisa di akases dari manapun
// salah satu membatasi akses ke fungsi atau variable
let counter = 0;

const add = () => {
    return ++counter;
};

console.log(add());
console.log(add());
counter = 23;
console.log(add());

// Clousure memungkinkan membuat fariable dan fungsi seolah menjadi private
const number = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
};

const addCounter = number();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());