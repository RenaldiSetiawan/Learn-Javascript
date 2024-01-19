// if akan menguji suatu kondisi, jika kondisi bernilai true maka blok kode akan dijalankan
// Jika false maka proses akan dilewatkan
const isRaining = true;

console.log("Persiapan sebelum berangkat");

if (isRaining) {
    console.log("Bawa payung. Hari ini akan hujan");
}
console.log("Berangkat");

// jIka kondisi bernilai false, maka statement else dijalankan
let x = 50;

if (x > 80) {
    console.log(x);
} else {
    console.log("Nilai Kurang dari 70");
};

//  mengecek kondisi sekaligus dengan menggabungkan else dan if
let langguage = "Japanese";
let greeting = "Selamat Pagi";

if (langguage === "English") {
    greeting = "Good Morning";
} else if (langguage === "Korea") {
    greeting = "joh-eun achim-ieyo"
} else if(langguage === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
};

console.log(greeting);

// ternary operator (?) atau conditional expressions, kita bisa menulisakn if-else statement hanya dalam satu baris
// condition ? true expression : false expression
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Diskon sebesar ${discount * 100}%`);

