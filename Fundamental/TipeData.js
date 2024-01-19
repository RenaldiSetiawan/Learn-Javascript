/* undefined  */
// tipe data tidak memiliki nilai
// mendeklarasi variable tanpa meng inisialisasi nilainya
let x;
console.log(x);

/* numbers */
// Varibale bertipe data number seperti angka
// typeof() untuk mengembalikan tipe data dalam bentuk teks
let number = 10;
console.log(typeof(number));

// operator dalam perhitungan aritmarika pada tipe data number
let a = 20;
let b = 5;

penjumlahan = a + b;
pengurangan = a - b;
pembagian = a / b;
perkalian = a * b;
sisaHasilBagi = a % b;
perpangkatan = a ** b;

console.log("20 + 5 =", penjumlahan);
console.log("20 - 5 =", pengurangan);
console.log("20 / 5 =", pembagian);
console.log("20 * 5 =", perkalian);
console.log("20 % 5 =", sisaHasilBagi);
console.log("20 ** 5 =", perpangkatan);

/* String */
// bertipe teks, gunakan tanda petik satu '' atau ""
let say = "Hello"
console.log(typeof(say));

// Escape string
//  gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik
const answer = '"I Think it\'s awesome" he answered confiden';
console.log(answer);

// String dengan operaot (+), menggabung dua teks yg terpisah mendadi satu
let greet = "no"
let moreGreet = greet + greet;
console.log(moreGreet);

// String interpolation, memasukan variable ke dalam string template.
// Untuk menggunakan string templet gunakan backtick ``
const myName = "Renal";
console.log(`my name is ${myName}`);

/* Boolean */
// Nilai Boolean true dan false
let benar = true;
let salah = false;
console.log(typeof(benar));
console.log(typeof(salah));

//komparasi
const motor = 10;
const mobil = 15;

let isGreater = motor > mobil;
let isLess = motor < mobil;
console.log(isGreater);
console.log(isLess);

/* Null */
// null perlu di inisialisai pada variable, sebagai nilai sementara
let someDay = null;
console.log(someDay);