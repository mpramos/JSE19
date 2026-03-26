alert('Bienvenidos/as a las votaciones')

let respuesta = confirm('Estás listo para votar?')
console.log(respuesta)

if (respuesta === true) {
    alert('Responde la siguiente pregunta')
} else {
    alert('vuelve pronto')
}

let edad = prompt('Ingrese su edad')
if (edad >= 18) {
    alert('eres mayor de edad, puedes votar')
} else {
    alert('eres menor de edad, aún no puedes votar')
}

let nombre = 'susana'
let puntos = 0
