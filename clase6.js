//? operadores
= === <= >= typeof + - * / **
4 +  5 //operador binario
typeof 9 // operador unario
let nombre
if (false) {
    nombre = 'dario'
} else {
    nombre = 'else'        
}
console.log(nombre);
//operador ternario
let nom = false ? 'melissa': 'juan'
console.log(nom);

let año = 2025
let añoNuevo = año = 2026
console.log(añoNuevo);

//Operadores aritmeticos // () * + 
console.log(2 + 2 * 2); // -> 6
console.log(2 + (2 * 2)); // -> 6
console.log((2 + 2) * 2); // -> 8
//Operadores aritemticos
const x = 5;
const y = 2;
 
console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1 (4%2) = 0
console.log("exponent: ", x ** y); // -> 25 

//Operadores aritemticos unarios
 console.log(Number(false));
    let str = "123";
    let n1 = +str;
    let n2 = -str;
    let n3 = -n2;
    let n4 = +"abcd";
 
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number

//Operadores  de incremento y decremento
let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;
console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19


let n = 0
n = n +1 //1
n = n +1 //2
n ++
n ++
n ++
console.log(n);

let num = 0
num = num + 10 //10
num = num + 10 //20
num = num + 10  //30
num += 10
num += 10
console.log(num);


let x = 10;
 
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4

//!Operadores lógicos

const a = false;
const b = true;
const c = false;
const d = true;
// && ||  ()
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false

//?  Operadores lógicos y valores no booleanos
let nr = 0; //falsy
let year = 1970; //truty
let name = "Alice"; //truty
let empty = ""; //falsy
 
console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true
 
console.log(!!nr); // -> false
console.log(!!name); // -> true


console.log(true && 1991); // -> 1991
console.log(1991 && true); // -> 1991
console.log(false && 1991); // -> false
console.log(1991 && false); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log(5 && 0); // -> 0
console.log(0 && false); // -> 0
console.log(false && 0); // -> false

console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
console.log("Bob" && ""); // -> empty string
 
 
console.log(true || 1991); // -> true
console.log(1991 || true); // -> true
console.log(false || 1991); // -> 1991
console.log(1991 || false); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob
console.log(0 || false); // false
console.log(false || 0); //  0


let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0


let b = false;
console.log(b); // -> false
b ||= true; // b = b || true
console.log(b); // -> true
//! OPERADORES DE STRINGS , CADENAS, TEXTOS
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice
 
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
 
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

let sentence = "Happy New ";
sentence += "Year ";
sentence += 10191;
console.log(sentence); // -> Happy New Year 10191

//Operadores de comparacion
//Triple igual
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

//Doble igual 
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

//Diferencia
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true   
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true


// 1234 ABCD  abcd 
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true
 
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
 
console.log("ab" < "ab4"); // -> true

//Operador typeof, evalua el tipo delvalor
console.log(typeof 7);
console.log(typeof [1,2,3]);
console.log(typeof {name:'juan', age:45});

//Operador instance of

console.log([1,2,3] instanceof Array);
console.log({name:'juan', age:45} instanceof Array);
console.log(7 instanceof Array);

let user = {
     name: "Alice",
     age: 38,
     image :'👨‍🦱'
};
console.log(user);
console.log(user.age); // -> 38
delete user.image;
console.log(user.image); // -> undefined

//? Operador ternario
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob


//! PRECEDENCIA
let a = 10;
let b = a + 2 * 3; //16
let c = a + 2  < 20 - 15; //12 < 5
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false


function name(params) {
    
}
name()

let a, b;
b = (a = (20 + 20) * 2) > (3 ** 2);
b = (a = 40 *2)>9
b = a = 80>9 //true
console.log(b); // -> true




 




