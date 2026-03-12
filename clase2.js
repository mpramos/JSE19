console.log(5+4)
console.log(5-4)
console.log(5*4)
console.log(5/4)


//! LET
// Declarar
let circulo //undefined
let rombo 
//Asignacion
circulo = '⚾' 
rombo = '✨' 

circulo='🧇'
let circulo
console.log(circulo);
console.log(rombo);

let usuarioM = "Maria"
usuarioM ="Mario"
console.log(usuarioM);


//! CONST
//Declara-asignar
const cuadrado = '🧇'
console.log(cuadrado);
cuadrado ='⚾'
console.log(cuadrado);

//! VAR
var usuario1='Maria'  
var usuario2='Jose'
var usuario1='Mario'
var deuda1=100000
var deuda1=0
// console.log(usuario1);
console.log(deuda1);


const text = ["Hola","Adiós"]
text.constructor.name;
const proto1= Object.getPrototypeOf(text)
console.log(proto1.constructor.name);
const proto2= Object.getPrototypeOf(proto1)
proto2.constructor.name
console.log(proto2.constructor.name);
const proto3= Object.getPrototypeOf(proto2)
if (proto3!==null) {
    console.log(proto3.constructor.name);
} else {
    console.log('Fin de la cadena de prototipos');
        
}
const numbers =[1,2,3]
getPrototypeChain(numbers);
console.log(numbers instanceof Array);
console.log(numbers instanceof Object);
console.log(numbers instanceof Number);
console.log(numbers instanceof String);

function getPrototypeChain(value) {
  let proto = Object.getPrototypeOf(value);
  let level = 1;

  console.log("=== Prototype chain ===");
  while (proto !== null) {
    console.log(`Nivel ${level}: ${proto.constructor?.name ?? "(sin constructor)"}`);
    proto = Object.getPrototypeOf(proto);
    level++;
  }
  console.log("Nivel final: null (fin)");
  console.log("=======================");
}







