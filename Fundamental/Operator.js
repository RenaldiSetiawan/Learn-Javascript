/* Assigment Operator */
// Operator untuk memberikan nilai pada variable
// tanda = , dimana untuk meng inisialisasi nilai pada variable
// shortcut
let x = 10;
let y = 5;

x += y;
console.log(x);

/* Comparison Operator */
/* Operator | Fungsi
    ==      | Membandingkan kedua nilai, tetapi mengabaikan tipe data
    !=      | Membandingkan kedua nilai harus tidak sama, tetapi mengabaikan tipe data
    ===     | Membandingkan kedua nilai beserta tipe data
    !==     | Membandignkan kedua nilai beserta tipe data harus tidak sama
*/

// sama (==) dan identik (===)
const aString = "10";
const aNumber = 10;

console.log(aString == aNumber); // true karna nilai nya sama 10
console.log(aString === aNumber); // false,, nilai sama, tipe data berbeda

/* Logical Operator */
/* Operator | Deskripsi
    &&      | Operator and. menghasilkan nilai true apabila semua kondisi terpenuhi (Bernilai True).
    ||      | Operator or. menghasilkan nilai true apabila satu kondisi terpenuhi
    !       | Operator not. membalikan satu kondisi
 */
let a = 10;
let b = 12;

/* AND */
console.log(a < 15 && b > 10); //(true && true) --> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR Operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false