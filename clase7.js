alert('Bienvenidos/as a las votaciones')

let respuesta = confirm('Estás listo para votar?')
console.log(respuesta)

if (respuesta === true) {
    alert('Responde la siguiente pregunta')
} else {
    alert('vuelve pronto')
}

let edad = prompt('Cuántos años tienes?, ingrese su edad')
if (edad >= 18) {
    let res = prompt('Tiene su carnet?, responde con un si o no')
    console.log(res)
    let tieneCarnet = res === 'si' ? true : false
    if (tieneCarnet) {
        alert('Puedes votar 👍');
    } else {
        alert('No puedes votar ❎')
    }
} else {
    alert('eres menor de edad, no puedes votar')
    
}

if (true === true) {
    console.log('se cumple')
}else{
    console.log('no se cumple')
}
if (false === false) {
    console.log('se cumple')
}else{
    console.log('no se cumple')
}
if(true){
    console.log('se cumple')
}else{console.log('no se cumple')}
if(false){
    console.log('se cumple')
}else{console.log('no se cumple')}
if('mario'){
    console.log('se cumple')
}else{console.log('no se cumple')}
if(''){
    console.log('se cumple')
}else{console.log('no se cumple')}
if(0){
    console.log('se cumple')
}else{console.log('no se cumple')}
if(-1223){
    console.log('se cumple')
}else{console.log('no se cumple')}


let esAdmin = false
let esModerador= false

if (esAdmin || esModerador) {
    console.log('tiene acceso')
} else {
    console.log('acceso denegado')
}

let nota = 65
if (nota >= 51 && nota <=100) {
    console.log('aprobado')
} else {
    console.log('reprobado')
}

let edad1 = 17
let permiso = true

if (edad1 >=18 || (edad1 <18 && permiso)) {
    console.log('Puedes ingresar')
}else{
    console.log('No puedes ingresar')

}

let usuario = "admin"
let password = "12345"

if (usuario === "admin" && password === "1234") {
    console.log('Login correcto');
} else {
    console.log('Login incorrecto');
}


let diaSemana = "sabado"
if (diaSemana === "lunes") {
    console.log('Hoy es lunes')
}else if(diaSemana === "martes"){
    console.log('Hoy es martes')
}else if(diaSemana === "miercoles"){
    console.log('Hoy es miercoles')
}else if(diaSemana === "jueves"){
    console.log('Hoy es Jueves')
}else if(diaSemana === "viernes"){
    console.log('Hoy es viernes')
}else {
    console.log('error')
}

let dia = `viernes`
switch (dia) {
    case 'lunes':
        console.log('Hoy es lunes')
        break;
    case 'martes':
        console.log('Hoy es martes')
        break;
    case 'miercoles':
        console.log('Hoy es miercoles')
        break;
    case 'jueves':
        console.log('Hoy es Jueves')
        break;
    case 'viernes':
        console.log('Hoy es Viernes')
        break;
    default:
        console.log('error')
            break;
        }


for (let numeros = 0; numeros <=90 ; numeros+=10) {
    console.log(numeros);
}
for (let numero = 90; numero >=0; numero-=10) {
    console.log(numero);
    
}
let numero = 90
while (numero>=0) {
    console.log(numero)
    numero-=10
}
let num=90
do {
    console.log(num);
    num-=10
} while (num>=0);


// array []
//objet0 {}
let comidas = ['🍿','🧀','🍔','🧇','🥞','🥓']
console.log(comidas);
let primer =comidas[5] //5
console.log(primer);

let tamaño = comidas.length //6-1 = 5
console.log(tamaño);
for (let posicion = 0; posicion <= comidas.length-1 ; posicion++) {
    console.log(comidas[posicion]);
}
let letras = ['a','b','c','d']
for (const letra of letras) {
    console.log(letra);
    
}

let usuario1 = {
    nombre :'juan',
    edad: 45,
    telefono :7454545
}
console.log(usuario1.nombre);
console.log(usuario1['nombre']);

for (const key in usuario1) {
    console.log(`La clave es ${key} : ${usuario1[key]}`);
}

for (let i = 0; i <=8; i++) {
    if (i === 5) {
        break
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}


//!FUNCIONES
function suma(a,b) {
    return a+b
}
console.log(suma(3,4))

let suma = (a,b)=>a+b
console.log(suma(4,5));

let resta =(a=3,b=1)=> a-b
console.log(resta());
console.log(resta(8,4));

let calculadora = (a,b) => {
    if (!(typeof a === 'number' && typeof b === 'number')) {
        return 'Tus parametros son incorrectos'
    } 
    let suma = a + b
    let resta = a - b
    let mult = a * b
    return {suma:suma,resta:resta,mult:mult}
}
console.log(calculadora(8,1));



