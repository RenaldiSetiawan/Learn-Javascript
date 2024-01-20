// Deklarasi dengan keyword function
// Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi
function muliply(a, b) {
    return a * b;
};
// Argument merupakan nilai atau expression yang dimasukan ke dalam fungsi
// multiply(3, 4);

// memanggilnya dengan menuliskan nama fungsi diikuti tanda kurung dan memasukkan argumen di dalamnya (jika ada).
function sapa() {
    console.log("Good Morning");
};

sapa();

//  Untuk menambah parameter pada fungsi
//  tamabahkan variable di dalam tanda kurung fungsi, tidak perlu var,let,const
function sayHello(name, language) {
    if (language === "English") {
        console.log(`Good Morning`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
};

sayHello("Harry", "French"); // memanggilnya pun kita perlu mengirimkan dua buah nilainya sebagai argumen:

// function dapat menghasilkan output atau mengembalikan sebuah nilai
function muliply(a, b) {
    return a * b
};

let result = muliply(5, 2);
console.log(result);
// Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan
// ilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain

/* Expression Function */
// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya
const greeting = function(name, language) {
  if (language === "English") {
    return "Good Morning " + name;
  } else if (language === "French") {
    return "Bonjour " + name;
  } else {
    return "Selamat Pagi " + name + "!";
  }
};
console.log(greeting('Ron', 'English'));