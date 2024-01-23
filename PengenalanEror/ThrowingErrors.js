const json = '{ "name": "Renal", "lastName": "STWN" }';

try {
    const user = JSON.parse(json); // fungsi JSON.parse konversi dari variable json string menjadi sebuah obj

    if (!user.age) {
        throw new SyntaxError("'age' is reqquired");
    }

    console.log(user.name);
    console.log(user.lastName);
    console.log(user.age); // undifined
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
};

// Ketika properti user.age tidak memiliki nilai maka program menghasilkan SyntaxError

