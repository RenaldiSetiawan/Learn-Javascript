// tipe data yg mengelompokan lebih dari satu nilai
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

// Data pada array berurutan dan di akses dengan Index, Index dimulai dari [ 0, 1, 2, 3, dst ]
console.log(myArray[1]);
// Jika meng akses niali array lebih dari index nya maka Undifened
console.log(myArray[5]);

/* push() */
// Menambah data ke dalam array
const newArr = ["Cokelat", 42.5, 22, true, "Programming"];
newArr.push('Javascript');
console.log(newArr);

/* pop() */
// Mengeluarakan data atau element terakhir dari array
const secondArr = [ 1, 2, 3, 4, 5 ];
secondArr.pop();
console.log("array pop: ", secondArr);

/* shift() */
// Mengeluarkan elemen Pertama dari array
secondArr.shift();
console.log("Array Shift: ", secondArr);

/* unshift() */
// Menambah element di awal array.
secondArr.unshift("Apple");
console.log("After unshift: ", secondArr);

/* Delete */
// menghapus data dari array
const hungry = ["Food", "Drink", "Cake", 99, true];
delete hungry[3];
console.log("Delete Array: ", hungry);
// Delete hanya menghapus data pada index lalu membiarakan posisi kosong, <1 empty item>
// Menghapus Elemet gunakan metode splice()
 
/* splice() */
hungry.splice(4,1); // menghapus index 4 sebanyak 1 elemen
console.log("After Splice: ", hungry);

// splice juga dapat menambah element pada array\
// memberikan argument ke 3
const month = ['January', 'March', 'April'];
console.log("before splice: ", month);

month.splice(1, 0, 'Februari');
console.log('after splice: ', month);