// set (set of values), data pada set tidak berurutan dan tidak di indeks
// sifat unik tidak dapat di duplikasi
const numberSet = new Set([1, 2, 4, 6, 4, 1]);
console.log(numberSet);

// Menambah data ke dalam Set, add()
// fungsi add() menerima satu argument, nilai yg duplikat akan di abaikan
numberSet.add(3);
numberSet.add(5);
numberSet.add(2);
console.log(numberSet);

// set tidak memiliki urutan index, argument dari fungsi delete hanya nilai yang dihapus, bukan indexnya
numberSet.delete(4);
console.log(numberSet);
