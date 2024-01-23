// try-catch untuk menangani error 
try {
    // Code
} catch (error) {
    // Error handling
}

// KODE TRY akan dihentikan ketika terjadi error,
// kemudian akan di jalankan baris catch
try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log("Terjadi error!");  // (4)
}

// Catch memiliki satu parameter bernama error (nama variable bisa di ubah)
/* Object error memiliki beberapa properti utama di dalamnya
    > name : Nama error yang terjadi
    > message : Pesan tentang detail error.
    > stack : Informasi urutan kejadian yang menyebabkan error
              Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error */
try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

/* try-catch-finally */
// Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch
try {
    console.log("Awal try-catch-finally");
    console.log("Akhir try-catch-finally");
  } catch (error) {
    console.log("Baris ini diabaikan");
  } finally {
    console.log("Akan tetap dieksekusi");
  }