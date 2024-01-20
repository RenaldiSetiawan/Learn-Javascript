/* Function Parameter */
// Parameter variable yang didefinisikan sebgai input dari sebuah fungsi
function muliply(a, b) {
    return a * b
};

//  Argument nilai atau expression yang dimasukan ke dalam fungsi
muliply(3, 4);

// Jika param dari fungsi adalah object, memanfaatkan destructuring obj untuk mendapat nilai
const user = {
    id: 24,
    displayName: 'Young',
    fullName: 'Wonyoung'
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
};

introduce(user);

/* Default Parameters */
// Fungsi JS tidak melakukan pengecekan terhadap jumlah maupun tipe argument yang dimasukan ke paramenter
// Bisa memasukan argumen meskipun tidak sesuai dengan parameter yang di definisikan
function exponentsFormula(baseNumber, exponent) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
};
exponentsFormula(2); // ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined

/* Rest Parameter */
// Rest Param juga di tulis denga tiga titik(...), kebalikan dari spread operator yang menyebarkan array menjadi beberapa elemet
// Rest Param menggabungkan beberapa element menjadi satu array
function sum(...numbers) {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }
    return result;
};

console.log(sum(1, 2, 3, 4, 5));
