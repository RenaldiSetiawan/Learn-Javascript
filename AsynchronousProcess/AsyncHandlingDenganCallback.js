/* Pola Callback */
// callback fungsi yang di siapkan pada argument fungsi asynchronous dan kan dipanggil ketika proses dinyatakan selesai
// akan membawa nilai-nilai yang dihasilkan dari proses async
function getUsers(callback) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abi'];
        callback(users);
    }, 3000)
}

function usersCallback(users) {
    console.log(users);
}

getUsers(usersCallback);

/* Mengubah Callback Menjadi Promise dengan Promisify */
// Do NodeJs terdapat sebuah fungsi dari module util yang dapt mengubag fungsi async callback-used mendjadi Promise-based

// Singkatnya, promisify hanya dapat digunakan pada fungsi yang mengikuti aturan Node.js callback. Inilah salah satu alasan perlunya mengikuti aturan yang standar
// gunakan promisify dalam mengubah berbagai fungsi yang disediakan Node.js menjadi Promise-based, contohnya fungsi fs.readFile() yang digunakan untuk membaca berkas secara asynchronous.
const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./data.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
