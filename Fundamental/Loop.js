// For Loop

/* 
    for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
        // do something
    }; 
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
};

// For of
/* 
    for(arrayItem of myArray) {
        // do something
    }
*/
let name = ["Luke", "Han", "Chew", "Leia"];

for (const arrayItem of name) {
    console.log(arrayItem);
};

// While
let i = 1;

while (i <= 5) {
    console.log(i);
    i++
};

//do-while
let j = 1;
do {
    console.log("do-while :", j);
    j++
} while (j <= 5);

// Infinet Loops
// kondisi yg perlu di hindari dimana program stucked di dalam perulangan