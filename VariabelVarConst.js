/* Variabel const ini, nilai atau datanya tidak akan berubah dalam kondisi apapun. 
Karena itulah ia dinamanakn const(konstan)
Untuk mendefinisikan variabel konstan, kita diwajibkan untuk langsung memasukan nilai dari variabel tersebut.*/

//Contoh

const bumi = "bulat";
const aku = "Pintar";
const pi = 3.14;

/* Sama seperti variabel let, scope dari variabel const ini juga block scope.
Artinya, variabel hanya bisa diakses di dalam scope, yang ditandai dalam sebuah kurung kurawal({..}) 
Jadi, kita tidak perlu lagi berurusan dengan function untuk membuat local scope. */

//Contoh
const diskon = 500
if (true) {// Tanda awal scope
    const diskon = 300 // Hanya bisa diakses di dalam scope
    console.log(diskon) //Output: 300
} // Tanda akhir scope
console.log(diskon) // Output: 500

/* Dikarenakan ini variabel konstanta, maka nilai dari variabel ini tidak bisa diubah. Atau dengan
kata lain, tidak bisa di reassigned dan redeclared. Dikarenakan variabel const bersifat ummutable,
itu berarti valuenya tidak dapat diubah - ubah.*/

// Contoh
// Kita tidak bisa ubah nilai bumi

const bumi = "bulat";
bumi = "datar";
// Output: TypeError: invalid assignment to const 'bumi'

/* Kita juga tidak dapat deklarasi ulang */
const bumi = "datar";
//Output: SyntaxError:Identifier 'bumi' has already been declared


/*Untuk variabel konstanta diatas tidak berlaku untuk object dan array.
Variabel const memang tidak bisa kita reassigned dan redeclared, tetapi property dalam object masih bisa diubah.
dikarenakan object dan array dalam JavaScript bersifat mutable yang berarti valuenya bisa kita ubah */

// Object dengan variabel const masoh bisa kita ubah property nya

const obj = { id:1, name:'sabrina'}
obj.location="Jakarta"
console.log(obj) // Output: {id:1. name: 'sabrina' location: 'Jakarta}

// Tapi, kita gak bisa reassigned
obj={} // Output: TypeError: Assignment to constant variabel.

/* Array dengan variabel cont masih bisa kita ubah propertynya */

const arrn= p[1,2,3,4]
arr.push(5)
console.log(arr) // Output: [1,2,3,4,5]
//Tapi, kita gak bisa reassigned
arr=[] // output: TypeError: Assignment to constant variabel.
