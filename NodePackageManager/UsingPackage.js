// package yang kita tambahkan ke dalam project sebenarnya adalah module
// tulah kenapa di dalam project kita akan muncul juga folder node_modules
// Karena merupakan module, kita bisa menambahkan kode dari package menggunakan keyword import
//Penamaan menggunakan underscore (_) seperti di atas merupakan standar dari lodash yang perlu kita ikuti
import _ from 'lodash';

const myArray = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log(sum);