// Pada ES6 Module, jika hanya mengekspor satu nilai, gunakan keyword export default
const food = {
    Rice: 100,
    Tomato: '50 Kg',
};

export default food;

// Lalu untuk mengimpor nilainya kita dapat menggunakan keyword import … from

// import coffeeStock from "./lokasi berkas";

// Jika berkas pada index.js di jalankan akan error
// fitur ES6 module tidak secara default diaktifkan

// Cara pertama rubag ekstensi .js menjadi .mjs atau gunakan cara lebih sederhana
// Tambahkan properti type dengan nilai module pada berkas package.json

// package.json > "type": "module"

