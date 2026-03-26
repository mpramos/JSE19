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