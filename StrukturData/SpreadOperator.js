// untuk Menyebarkan nilai array atau tepatnya iterable object menjadi beberapa elemet.
// ditulis dengan tiga titik (...)
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites);
console.log(...favorites);

// spread juga dapat menggabungkan dua buah array ke array baru
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];
console.log(allFavorites);

// selain array, spread juga bisa untuk object literals
// dapat menggabungkan beberapa object jadi lebih rinkas
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);