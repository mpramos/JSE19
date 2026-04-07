//errores

const nombre = 'juana'
nombre=4
console.log(nombre)
const edad = 56
console.log(edad);


hola q tal bros 
holii
cringe
sugarDaddy
outfit
holi q tal como estuvo el party
Ola k tal t kiero


La fiesta se desarrollará en el parque de las culturas, el cuál se encuentra dentro del teleferico rojo

la fiesta se desarrollara en el parque de las culturas el cual se encuentra dentro del teleferico rojo
// error de sintaxis => errores de ortografia
la fiest se desarrollara en el parque el cual se encuentra dentro del teleferic rojo
//error de referencia =>no existen esas palabras
La fiesta se desarrollará en el parque de las culturas, el cuál se encuentra dentro del teleferico 
//error logico



console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

"use strict";
if (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
let b=9
let a = b; // -> Uncaught ReferenceError: b is not defined

function sumar() {
    
}
sumar()


const edad1 = 45
edad1=40

let nombre1 ='juana'
console.log(nombre1.length)

let numero =10
console.log(numero.length())

let nombres =[]
console.log(nombres)

let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);

 
 try {
     console.log('m1')
     console.log(hola)
     console.log('m3')
} catch (error) {
    console.log('Error ',error.message)    
}
console.log('m4')
console.log('m5')

console.log( [4,5,6] instanceof Array)
console.log( 5 instanceof Array)


const a = -2;
try {
    a=3
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2

try {
    let a = b
} catch (error) {
    console.log('Error', error.message)
} finally {
    console.log('Que se ejecute de todas formas')
}
let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    try {
        console.log(b); // Second ReferenceError
    } catch {
        console.log("Second catch!"); // -> Second catch!
    }
} finally{
    console.log('hola a todos')
}



try {
    console.log("start"); // -> start
    throw 9; // -> Uncaught 9
} catch (error) {
    console.log(error)
}
console.log("end");

// 6! = 6*5*4*3*2*1=720
console.log(factorial(6))
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20
console.log('mensaje fin')
try {
    function factorial(n) {
        if (n > 20) {
            throw new RangeError("Max value 20");
        }
        let result = 1;
        for (; n > 1; n--) {
            result = result * n;
        }
        return result;
    }
    console.log(factorial(6))
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000));
} catch (error) {
    console.log('Error ', error.message)
}
console.log('mensaje fin')