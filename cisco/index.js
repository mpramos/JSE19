   alert('buenos dias')
       let nombre= prompt('Ingrese su nombre')
       let edad= prompt('Ingrese su edad')
       console.log(`El nombre es ${nombre} y el tipo de dato es: ${typeof nombre}`);
       console.log(`La edad es ${edad} y el tipo de dato es: ${typeof Number(edad)}`);
       let respuesta = confirm('Usted desea confirmar dicha transacción?')
       console.log(respuesta);
         let input = document.getElementById('input')
        function enviar() {
            console.log(input.value);
        }