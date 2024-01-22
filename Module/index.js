// dalama inisialisasi varibale coffStock,
// guanakan method require() dengan memberi parameter lokasi berkas
// dengan begitu coffeStock akan memiliki niali module.exports yang sama

/* const { coffeStock, isCoffeeMachineReady } = require('./Export-Import');

const makeCoffe = (type, miligrams) => {
    if (coffeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Kopi habis!");
    }
};

makeCoffe('robusta', 20);
console.log(isCoffeeMachineReady); */

// ES6 Gunakan Import
import foodStock from './ES6Module.js';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(foodStock);

