console.log( typeof("hola"))
console.log( typeof(4))
//!STRINGS
//CHARAT(indice=posicion que tiene nuestra letra en el texto)
let str = "java script language"
let numb=23
// console.log(str.charAt(5));
//metodo slice
console.log(str.slice(0,4));
console.log(str.slice(15,19));
//metodo split
console.log(str.split(' '));
console.log('192.8.5'.split('.'));
//!Undefined
let cja1 //declaracion
console.log(cja1); //undefined
console.log(typeof undefined); //undefined
//!Null
console.log(typeof null); //object
let caja2 = null
console.log(typeof caja2); //object
console.log(caja2);
//!Conversiones de lo datos primitivos
// String number booolean undefined null bigint symbol
const nombre = 'juana'
console.log(nombre);
console.log( typeof nombre);
const nombre1 = String() //string //''
const numero = Number() //0
const bool = Boolean() //false
const bigInt = BigInt(12324243436523232323143)
console.log(bigInt);
console.log(nombre1);
console.log(numero);
console.log(bool);

//bigInt
let num = 12324243436523232323143n
console.log(num);

let cadena1='23'
let cadena2='24'
let cadena1Convertido = Number(cadena1)
let cadena2Convertido = Number(cadena2)
console.log(cadena1Convertido+cadena2Convertido);

let num1 = 897
let num2 = 797
let num1Convertido = String(num1) 
let num2Convertido = String(num2) 
console.log(num1Convertido+num2Convertido);


let nombrePersona = 'esteban'
let edad = 36
let periodo = 5

//PROCESO DE INSCRIPCION
// en 5 años cuantos años tendra nuestra persona inscrita?
let suma = edad + periodo
console.log(suma);

// console.log('Nombre de la persona inscrita: '+nombrePersona + ' '+ 'En cinco años la persona tendrá la edad de: ' +suma );

console.log(`Nombre de la persona inscrita ${nombrePersona}.
En cinco años ${nombrePersona} tendrá la edad de ${edad+periodo} `);

//Conversiones a Booleanos
let bol1 = 0
let bol2 = 'juana'
let bol3 = 7
let bol4 = ''
console.log(Boolean(bol1)); //false
console.log(Boolean(bol2)); // true
console.log(Boolean(bol3)); //true
console.log(Boolean(bol4)); //false

// Valores falsos
0 false ''

//  verdaderos
-1 1.4 true 'a'

//! CONVERSIONES IMPLICITAS

console.log('4' + 5); //'45'
console.log('7'- '6');//1
console.log('7'* 6); //42
console.log('7'/ 6);//1.166
console.log('7'** 6);// 117649

console.log('sum'+5); //sum5
console.log(typeof ('sum'-5)); //NaN not a number sum-5 
console.log('sum'*5);//NaN
console.log('sum'/5);//NaN
console.log('sum'**5);//NaN

//PRÁCTICAS
// Pregunta 1: Escribe un código que cree variables e inicialice con valores de Booleano,
//  Number, BigInt, String y tipos indefinidos usando (cuando sea posible) literales y funciones constructoras.
let bool1 = true 
let bool11 = Boolean(true) 
let numb1 = 4
let bigInt1 = 8795959595n
let indef = undefined
console.log(` Booleano ${bool1}
    Numero ${numb1}
    BigInt ${bigInt1}
    Indefinido  ${undefined}
    `
);
 
// TIPOS DE DATOS COMPLEJOS
//ARREGLOS 
let numeros =[2,3,4,4,5,5,'👨‍🦱',true]
console.log(numeros);
//? Obtener un elemento(valor) de un arreglo
let numeroUno = numeros[0] 
let emoji = numeros[6]
console.log(`Emoji : ${emoji}`);
//? Agregar propiedades
let comidas =['🍕','🍔','🍟','🌭','🍿']
console.log( `Arreglo de comidas ${ comidas  } de ${comidas.length} elementos`);
//*Reverse
console.log(`El metodo Reverse Dá la vuelta al arreglo ${comidas.reverse()}`);
//* IndexOf
console.log(`El metodo IndexOf obtiene el indice del elemento ${comidas.indexOf('🌭')}`);
//* Agrega el elemento atrás
comidas.push('🧀')
console.log(`El metodo Push agrega como ultimo elemento ${comidas}`);
//* Eliminar  el  ultimo elemento
comidas.pop()
console.log(`El metodo Pop elimina el ultimo elemento ${comidas}`);
//* Agregar el elemento al inicio
comidas.unshift('🧀')
console.log(`El metodo Unshift agrega el elemento al inicio ${comidas}`);
//* Eliminar el elemento al inicio
comidas.shift()
console.log(`El metodo Shift elimina el elemento al inicio ${comidas}`);

let cmd = ['😉','😀']
let cmd1 =['🧀','🍿']
console.log(cmd.concat(cmd1));

//OBJETOS
let usuario1 ={nombre:'juan',edad:36}
//? Obtener un valor
// console.log(`El usuario ${usuario1.nombre} tiene ${usuario1.edad} años`);
//? Agregar una nueva propiedad 
usuario1.telefono = 23424234
usuario1.nombre='juana'
delete usuario1.telefono
delete usuario1.edad
console.log(usuario1);

console.log(typeof null);
console.log(typeof 89n);

console.log(typeof ['texto','texto1']); //object
console.log(typeof {nombre:'juana'});//object
//Operador para comparar con un arreglo
console.log( ['texto','texto1'] instanceof Array);
/**
 * juana
 * jjj
 * djdjdjd
 * jdjdjdj
 */
let nom = 8 +9 /* esto una suma de tres operandos*/+ 30



















