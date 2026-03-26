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

