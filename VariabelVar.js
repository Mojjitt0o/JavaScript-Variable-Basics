var nama007 = "Dimas Pamungkas";

var namaPengguna = "DimasPamungkas";
let topicl = "JavaScript Fundamental";

/* Buat variabel var dengan cara deklarasi dulu */
var harga; //Declaration
harga = 1000; //Assingment

/* Buat variabel var yang langsung kita kasih nilai*/
var harga = 1000



/* Batas materi*/

var diskon = 700 // Global scope
if (true){
    var diskon = 300 // Global scope
}

console.log(diskon)
// Output:300
// karena var adalah global scope

/* Sebelum ada ES6, solusinya membuat function scope -> local scope*/
var diskon = 500 // Global scope
function diskonScope(){
    var diskon = 300 // Local scope
    console.log(diskon) // Output: 300
}
diskonScope()
console.log(diskon) //Output: 500



/* Materi lanjutan */


var name; // Declaration -> Pernyataan
console.log(name) // Output: undefined -> Tidak terdefinisi

name = 'Perum Spring Residence' // Assignment -> Penugasan
console.log(name) // Output: Perum Spring Residence'

var name ='Bot Sabrina' //Redeclared and Reassingned -> Dideklarasikan ulang dan Ditinjau Kembali
console.log(name) // Outuput: Bot Sabrina



/* Materi lanjutan Hoisting */

name = 'Mentor Sabrina' // Variabel di assign duluan
var name; // Kemudian baru di deklarasikan
console.log(name) // Output: Mentor Sabrina

/* Di belakang layar terjadi hoisting */
var name;
name = 'Mentor Sabrina'
console.log(name) // Output: Mentor Sabrina


