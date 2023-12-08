
/* Variabel Let */
/* Buat variabel yang langsung kita kasih nilai */
let pesan = "Hello World"
console.log(pesan)


/* Buat banyak variabel sekaligus */
let nama = "Sabrina", //Dipisahkan dengan koma
umur = 25, // Dipisahkan dengan koma
JenisKelamin = "Laki-laki" 

console.log(nama); // Output : Sabrina
console.log(umur); // Output : 25
console.log(JenisKelamin); // Output : Laki-laki

/* Scope dari variabel let ini adalah block scope. Artinya, variabel hanya bisa diakses di dalam scope,
yang ditandai dalam sebuah kurung karawal, jadi dengan menggunakan variabel let. kita tidak perlu lagi
berurusan dengan function untuk membuat local scope */

let potongan = 800
if (true) { // Tanda awal scope
let potongan = 300 // Hanya bisa diakases dalam scope
console.log(potongan) // Output: 300, karena yang diambil di dalam kurung kurawal
} // Tanda akhir scope
console.log(potongan) // Output: 500

/* Variabel let dapat diupdate nilainya (reassigned), tetapi tidak dapat di deklarasi ulang namanya (redeclared).
Jadi akan terdapat pesan eror ketika terjadi duplikasi variabel */

let panggilan; // Declaration
console.log(panggilan) // Output: undefined

panggilan = 'Dimas' // Assignment
console.log(panggilan)

panggilan ='Dimas Pamungkas'
console.log(panggilan)





/* Materi Selanjutnya */
/* Untuk hoisting, bariabel let ini bisa di-hoisting. Namun, kalo hoisting nya dijalankan pada console di web browser, maka akan error.
 Karena engine JavaScript tidak bisa mengakses nama variabel sebelum dideklarasikan atau diinisialisasi
 Kondisi ini biasanya disebut dengan istilah Temporal Dead Zone (TDZ) */

//Contoh pertama di codesandbox.io
/*
nami = "Bot"; //Assignment
let nami; // Declaration
console.log(nami);*/

//Contoh pertama di console web browser
/*
name ='Bot' //Assignment
let name; //Decelaration
console.log(name); */
// Output: cannot access 'name' before initialization

/* Setelah di revisi kode */
let nami = 'Bot'; //Initialization
console.log(nami); // Output: Bot

/* Tidak hanya eror di console web browser, variabel let akan eror juga apabila dijalankan di dalam function.
Karena sebenarnya, dibelakang layar JavaScript mendeklarasikan variabel tersebut ke atas tanpa value, sehingga akan menghasilkan undefined.
Tetapi, hal ini berguna karena mengingatkan kita untuk merevisi kode sesuai kaidah yang baik */

//Contoh
let message = "Hello"
function greetings(){
    console.log(meesage)
    let message = "Hello World"
}
greetings()
//Output: Uncaught ReferenceEror : Cannot acces 'message' before initialization

/* Setelah kode direvisi */
let message = "Hello"
function greetings(){
    let meesage = "Hello World"
    console.log(meesage)
}
greetings()
//Output: Hello World


