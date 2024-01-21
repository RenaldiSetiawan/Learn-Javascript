/* Pure Function */
//  kosep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi / parmenternya
//  fungsi dibawah tidak pure Function, karna membutuhkan nilai yang berda di luar fungsi
//  bila PI berubah maka fungsi akan mendapat nilai berbeda, walau diberi parm yang sama
let PI = 3.14;

const hitungLuasLingkaran = (jarijari) => {
    return PI * (jarijari * jarijari);
};

console.log(hitungLuasLingkaran(4));

// Cara buat fungsi jadi Pure
// engan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah
const hitung = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitung(4));
console.log(hitung(4));
console.log(hitung(8));
console.log(hitung(8));

// Contoh lain
const createPersonWithAge = (age, person) => {
    return { ...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});

/* Rekursif */
//  Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri
const countDown = start => {
    console.log(start);
    if (start > 0) countDown(start - 1);
};

countDown(10);
