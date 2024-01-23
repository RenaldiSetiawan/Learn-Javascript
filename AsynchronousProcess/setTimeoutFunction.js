// setTimeout() menerima dua argument 
    /* 
        > Argument pertama merupakan sebuah fungsi yang akan di panggil secara terjadwal dan asynshronous
        > Argument kedua merupakan delay waktu dalam satuan milisecond yg menentukan delay dari pemanggilan fungsi pada argument pertama
    */

console.log('Selamat Datang');

setTimeout(() => {
    console.log('Terimakasih, silah kan datang kembali');
}, 3000);

console.log('Ada yang bisa dibantu');

// setTimeout() tidak akan menghentikan Javascript untuk eksekusi kode pada baris berikutnya
// Fungsi setTimeout cara palign dasar untuk membuat kode berjalan asynchronous

