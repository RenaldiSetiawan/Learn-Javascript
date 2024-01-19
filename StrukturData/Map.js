// Tipe data dengan format key-value layaknya, map memeperbolehkan tipe data apapun
// untuk mendefinisikan map gunakan cosnsturktor seperti ini
/* 
    const muMap = new Map();
 */
// menetapkan nilai Map secara langsung, gunakan array multi dimensi
// Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map
// array di dalamnya, memiliki dua elemet, key dan value
const myMap = new Map([
    ['1', 'a String key'], // key dan value
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

// Mendapat nilai berdasarkan key tertentu dengan metode get()
// Menambah pasangan key-value baru guankan metode set()
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("Korea Selatan", "Korea Utara");
console.log(capital.size);
console.log(capital.get("Korea Selatan"));

//  jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map
