// Variable yg dapat di akses dari seluruh script disebut 'Globally Scoped'
// Variable yg hanya dapat di akses pada fungsi tertentu 'Locally Scoped'

// harus berhati - hati dalam mendefinisikan variable di dalam fungsi
// bisa mendapat hasil yang tidak di inginkan
function muliply(num) {
    total = num * num;
    return total;
};

let total = 9;
let number = muliply(20);

console.log(total);

// Jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.