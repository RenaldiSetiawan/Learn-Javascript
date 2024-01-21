/* Array Map */
// Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function
['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });

// Fungsi MAP akan mengembalikan nilai array baru
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });

console.log(newArray);

/* Array Filter */
// berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada
// callback function dari fungsi ini harus mengembalikan boolean
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/* Array Reduce */
// fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja
const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/* Array Some */
// Fungsi ini akan menghasilkan nilai boolean.Fungsi ini akan menghasilkan nilai boolean
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/* Array find */
// Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback functionMirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function
const Human = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const findJames = Human.find(Human => Human.name === 'James');
console.log(findJames);

/* Array Sort */
// melakukan pengurutan nilai dari sebuah deretan nilai
// Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

/* Array every */
// untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan
// Kembalian dari array.every() adalah nilai Boolean
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/* Array forEach */
// untuk memanggil fungsi callback pada setiap iterasi index array
//
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}