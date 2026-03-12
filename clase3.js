//! CLASE 2
"use strict"
let nombre = 'maria'
console.log(nombre);
// tierra
    //variables globales
{
    console.log(nombre);
    let numero = 3
    console.log(numero);
    {
        console.log(numero);
        
    }
}
//marte
{
    
}

//jupiter
{
    console.log(nombre);

}

let  altura  =  180;
{
         let  ancho  =  70;
         console.log(altura);  //  ->  180
         console.log(ancho);  //  ->  70	
}
console.log(altura);  //  ->  180
console.log(ancho);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined


// prendaA='camiseta'
// prendaB='pantalon'
function lavadora(prendaA,prendaB) { //parametros
    console.log('lavar ' + prendaA);
    console.log('lavar ' + prendaB);
}
lavadora('camiseta',true) // click al boton de la lavadora iniciar
lavadora('sabanas','edredones') //argumento

// string = 'texto'
function lavadoraString(prendaA) {
    if (typeof(prendaA) === "string") {
        console.log('lavar ' + prendaA);
    } else {
        console.log('no vamos a lavar porque el dato es incorrecto, debes ingresar un string');
        
    }
}

lavadoraString(true)



var saludoGlobal  =  "Buen  ";
   
function  testFunction()  {
         var saludoLocal  =  "Dia  ";    
         console.log("function:");
         console.log(saludoGlobal);
         console.log(saludoLocal);
}
   
testFunction();
   
console.log("main  program:");
console.log(saludoGlobal);
console.log(saludoLocal);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined

{
    let nombreA = 'juana'
    {
        
        let nombreA = 'susana'
        console.log(nombreA);
        
    }
    console.log(nombreA);
}

 //hoisting
 curso = 'undefined'
 console.log(curso);
 var curso = 'curso A'

 let curso = 'curso A'
 console.log(curso);
 

//!  TIPOS DE DATOS
//  TIPOS DE DATOS PRIMITIVOS
string => 'hola', "hola" ,`hola` //alt gr + }
number => 4,5,-6, -9.8
boolean => true, false
// null => Object
undefined => undefined
//  TIPOS DE DATOS COMPLEJOS 
arreglo, array, vectores, listas => []
objetos => {
    clave : valor
}
//TypeOf
let nombreB = 'juana'
let numeroB = 3
let estaEncendido=true
console.log(typeof(nombreB));
console.log(typeof(numeroB));
console.log(typeof(estaEncendido));

// metodos de string
console.log('maria'.length);
console.log('maria'.charAt(5));


console.log(typeof(3)); // * - + /
console.log(typeof('hola')); // * - + /

console.log(typeof('string')=== "string");
console.log(typeof(3) === "number");
console.log(typeof(true) === "boolean");



