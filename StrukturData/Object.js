// Object berisi pasangan key dan value 
// Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.
let object =  {
    key1: "value1",
    key2: "value2"
};

// satu object dapata memiliki beberapa pasangan key-value yang dipisahkan dengan tanga koma (,)
// Untuk mengakses nilai dari properti object, memanggil nama objeck lalu tanda titik dan di ikuti nama propertinya.
const user = {
    firstName: "Renal",
    lastName: "Setiawan",
    age: "25",
    isJavascript: "true"
};

console.log(`Hala nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur sata ${user.age}`);
console.log(`Sedang Belajar Javascript ${user.isJavascript}`);

// properti juga bisa menggunakan bracket []
// user["home world"];  untuk akses key yg memiliki spasi atau karakter khusus
const newUser = {
    firstName: "Luke",
    "home world": "Tattonie"
};

console.log(`nama saya ${newUser.firstName}`);
console.log(`Rumah saya di ${newUser["home world"]}`);

// Untuk mengubah nilai properti di dalam object gunakan assigment operator (=)
const spaceShip = {
    name: "Falcaon M99",
    manufacture: "Corporation Enginer Space",
    maxSpeed: 3200,
    color: "Red"
};

spaceShip.color = "Glossy Red";
spaceShip["maxSpeed"] = 3000
// mengubah nilai berbeda dengan meng inisialisasi ulang nilai,
// ketika membuat object kita tidak terkait dengan properti di dalamnya sehingga bisa memodifikasi nilai
// Jika property dengan nama key tidak ditemukan, maka properti baru akan di tambahkan ke object
spaceShip.gunType = "Rudal Cannon";
console.log(spaceShip);

// Menghapus properti dengan keyword Delete
const number = {
    one: "satu",
    two: 2,
    three: 3
};

number.two = "dua";
delete number.three;
console.log(number);