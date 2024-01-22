// Module Exports untuk melakukan proses export module

const coffeStock = {
    arabica: 10000,
    robusta: 50,
    liberica: 600
};

// module.exports = coffeStock //Export satu nilai

// module.exports = coffeeStock membuat object coffeeStock ditetapkan sebagai nilai dari module.exports
// . Nilai properti exports ini nantinya bisa di-import dan digunakan pada berkas JavaScript lain

// mencoba melihat nilai module yang ada pada berkas state.js dengan menambahkan kode 
// console.log(module)
// ntuk melihat hasilnya, Anda harus menjalankan dengan perintah node Export-Import.js

/* Export Beberapa Nilai pada Node.js */
const isCoffeeMachineReady = true;
// mengekspor satu nilai, tetapi kita akan memanfaatkan object literals ({ })
module.exports = {coffeStock, isCoffeeMachineReady}; 

