/* Menjalankan Project Node */
console.log("Hello Node");

// Untuk menjalankan file Javascript dengan node gunakan perintah
// node namafile.js pada terminal

/* Run Script */
// Secara default object tersebut akan terbentuk ketika package.json
// program script berada di dalam package.json
// Untuk menjalankan script, gunakan perintah npm run <script-name>
// npm run test

/* 
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    }, 
*/

// Dengan menjalankan script test, artinya kita mengeksekusi kode yang berada di dalam nilai test

// Pada object scripts, tuliskan nilai baru dengan properti bernama start, kemudian tambahkan perintah untuk mengeksekusi berkas sebagai nilainya

/* 
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node <nama File>.js"
  }
*/