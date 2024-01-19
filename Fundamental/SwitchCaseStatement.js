// switch melakukan pengecakan banyak kondisi dengan lebih mudah dan ringkas

/*  tanda kurung setalah switch berisi variable / expresion yg akan di eval
    Jika kondisi CASE sama dengan var pada switch, maka blok kode setelah (:) akan di jalankan
    Keyword BREAK untuk keluar dari proses switch.
    Keyword DEFAULT fungsi sama seperti ELSE
*/

let language = "Korea";
let greeting = null;

switch (language) {
    case "Englis":
        greeting = "Good Morning"
        break;
    case "Korea":
        greeting = "joh-eun achim-ieyo"
        break;
    case "Japanese":
        greeting = "Ohayo"
        break;
    default:
        greeting = "Selamat Pagi"
        break;
};
console.log(greeting);