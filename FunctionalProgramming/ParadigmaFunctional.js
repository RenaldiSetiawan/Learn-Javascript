// Paradigma dimana proses komputasi didasarkan pada fungsi matematika\
// gambaran deklaratid dan imperatif
const names = ['Hary', 'Ren', 'Jeff', 'Thom'];

const newName = [];

for (let i = 0; i < names.length; i++) {
   newName.push(`${names[i]}`);
}

console.log(newName);

// Deklaratif
// Code lebih mudah di baca
const deklaratifNames = ['Hary', 'Ren', 'Jeff', 'Thom'];

const newDeklarNames = deklaratifNames.map((name) => `${name}`);

console.log(newDeklarNames);