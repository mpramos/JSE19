//! FUNCIONES
// es un fragmento de codigo 
// son tareas especificas, 


// let suma1 = 4 +5 
// let suma2 = 5 +5 
// let suma3 = 7 +9
// let suma4 = 5+6
// let suma5 = 6+6
// console.log(suma1,suma2,suma3,suma4,suma5);

function suma(a,b) { //parametros
    console.log(a+b)
}
suma(4,5) //argumento



function resta(x,y) {
    console.log(x-y)
}
resta(3,2)

function resta1(a,b) {
    return a-b //4-2 = 2
}
console.log(resta1(5,3))
function saludar(nombre) {
    console.log(nombre)
}
saludar('mario')
//! funciones de flecha
let suma = (a,b)=>{return a+b}
console.log(suma(4,5))
let resta = (a,b)=>{return (a-b)}
console.log(resta(false,true))//NaN true 1 false 0
console.log(resta('hola',5))//NaN
console.log(resta(true,5))//NaN true 1
console.log(resta(true,true))//NaN true 1
console.log(resta(6,5))
let multiplicacion = (a,b)=>{return (a*b)} ///
console.log(multiplicacion(3,4))

let sumar = (valor1,valor2)=>{
    // if(typeof valor1 === 'number' && typeof valor2 === 'number'){
    //     return valor1 + valor2
    // }else{
    //     return 'valores incorrectos, ambos deben ser numeros'
    // }
    if (!(typeof valor1 === 'number' && typeof valor2 ==='number')) return 'valores incorrectos, ambos deben ser numeros'
    return valor1 + valor2
}
console.log(sumar(3,4));
console.log(sumar(true,'hola'));
console.log(sumar(5,true));


//!funciones recursivas

factorial 6 = 6! => 6*5*4*3*2*1 =720
6! =  6*5*4*3*2*1 => 6 * 5! = 720
5!=5*4!
4!= 4*3!
3!= 3*2!
2!= 2*1!= 2
1! = 1

function factorial (n) {
     return n > 1 ? n * factorial(n - 1) : 1; //6 * 5! 5*4! 5*3! 2*1! =1
}
console.log(factorial(6)); // -> 720


let suma1 = (a,b)=>{return a+b}
let resta1 = (a,b)=>{return a-b}
let multiplicacion1 = (a,b)=>{return a*b}
let division = (a,b)=>{return a/b}
// console.log(suma1(3,4));

let calculadora = (callback,a,b)=>{return callback(a,b)}
console.log(calculadora(multiplicacion1,3,4));
console.log(calculadora(division,12,3));

console.log(calculadora(suma1,1,2))
console.log(calculadora(resta1,6,2))

//setTimeout
let saludar = ()=>{console.log('Hola')}
// console.log(saludar())
setTimeout(saludar,3000)
