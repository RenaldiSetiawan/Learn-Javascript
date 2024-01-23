/* Promise.all() */
// Untuk mengeksekusi banyak promis secara pararel
// Menerimas sebuah array yang berisi beberapa promise sebagai argument
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));

const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));

const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));

/* Promis.race() */
// Untuk mengeksekusi beberapa Promise secara paralel 
// Hanya mengembalikan nilai promise yang paling cepat

Promise.race([promise1, promise2, promise3]).then((value) => console.log(value));
// Promise.race hanya mengembalikan nilai Promise yg prosesnya paling cepat

/* Promise.allSettled */
// Bekerja seperti Promise.all()
// Mengembalikan seluruh hasil dari Promise yang di eksekusi dalam bentuk array of object
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => console.log(results));

/* Promise.any */
// hampir sama seperti promise.race()
// hanya mengembalikan nilai tercepat yang berstatus fulfilled
// jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
    .then((value) => console.log(value)) // 1
    .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message)); // All Promises were rejected