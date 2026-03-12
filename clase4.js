// condicionales
    if ('3'==3) {
        console.log('son iguales');
    }else{
        console.log('no son iguales');
    }

    // if => si
    let estudio = 'true'
    if (estudio == true) {
        console.log('voy a poder aprobar el examen');
    }else{
        console.log('No voy a poder aprobar el examen')
    }

//si yo estudio entonces voy a aprobar el examen de cisco
//si yo no estudio entonces no voy a aprobar el examen de cisco
//! LAS DESICIONES

ALGORITMO - Un conjunto de pasos para ejecutar una tarea
para aprobar el examen

que tareas debo realizar?
    separar las materias de acuerdo a su prioridad
    estdiar las materias con mayor prioridad en la mañana 
    estudiar las materias con menor prioridad en la tarde

quiero vivir sola/o 18
que tareas debo realizar? 
    contar un trabajo fijo de pago mensual por lo menos un año
    compra de muebles cama ropero mesa
    contar con una cocina / estufa

//! OPERADORES
2 + 3
//! operadores aritmeticos
console.log(2+3); // suma algebraica
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2**3); 2*2*2
//? operador de la concatenacion
console.log('hola'+3) //concatenar
console.log(3+'hola');
console.log(true+'hola');
console.log('adios'+' '+true);
console.log('hola'+' '+'adios')
//!OPERADORES DE LA COMPARACIÓN

// tienen el mismo genero de mujer?
//sergio 👨‍🦱 es mujer?  tania es mujer?👩 no ===
// se sienten que tienen el mismo genero?
//sergio 👨‍🦱 es mujer?  tania es mujer?👩 si ==

//  === es un igual estricto => true, false
//  == es un igual flexible => true, false
console.log('3' == 3); //true
console.log('3' === 3); //false
console.log('5' == 3);
console.log(true == 3);
console.log(false == 3);

console.log(3>4);//false
console.log(3>=3) //true

//! OPERADORES UNARIOS
typeof(4)
//?incremento
let num=4
console.log(num++) //4
console.log(num++) //5
console.log(num++) //6
// console.log(++num) //5
// console.log(++num) //6 
// console.log(++num) //7
//?decremento
let numD=4
console.log(numD--);//4
console.log(numD--);//3
console.log(numD--);//2
// console.log(--numD); 3
// console.log(--numD); 2
// console.log(--numD); 1



// CICLOS/BUCLES
// conjunto de instrucciones que se van repitiendo segun la condicion

// si tengo kilos extras se me va a ser dificil llevar una dieta  e ir al gym

// 5 FIJO // si repito 5 veces esta tarea entonces rebajare medio kilo
  lunes/ hago dieta y ejercicio
  martes/ hago dieta y ejercicio
  miercoles/ hago dieta y ejercicio
  jueves/ hago dieta y ejercicio
  viernes/ hago dieta y ejercicio
// rebajare medio kilo
//El primer segmento  declarando una variable y asignando el valor INICIAL i=0
//El segundo segmento condicion
// Tercer segmento es el incremento ++ 
0 1 2 3 4 5 6 7 8 9 10
// pruebas de escritorio
i | i<=10 |i++ |salida
0 |  0<=10 |0 =>1  | 0
  |  1<=10=true   | 1 => 2 | 1
  |  2<=10=true   | 2 => 3 | 2
  |  3<=10=true   | 3 => 4 | 3
  |  4<=10=true   | 4 => 5 | 4 //...
  |  9<=10=true   | 9 => 10 | 9
  |  10<=10=true   | 10 => 11 | 10
  |  11<=10=false   | 11 => 12 |
  
  for (let i=0;i<=10;i++) {
      console.log(i);
    }
    
    // segundo grupo de los ciclos
    //un viaje de crucero con mi pareja para revivir el amor no tenga un limite fijo
    // hasta que nos enamoremos nuevamente no vamos a salir del crucero
    // si nos enamoramos nuevamente entonces salimos del crucero y se rompe el ciclo de estar juntos
    // en el crucero
let j=11// valor inicial
while (j<=10) {
    console.log(j);
    j++
}
//PRUEBAS DE ESCRITORIO
j | j<=10 |salida | j++
0 | 0<=10=true |0  | 0 => 1
  | 1<=10=true |1  | 1 => 2
  | 2<=10=true |2  | 2 => 3
  | 3<=10=true |3  | 3 => 4
  | 9<=10=true |9  | 9 => 10
  | 10<=10=true |10  | 10 => 11
  | 11<=10=false 
let g = 11
do {
    console.log(g);
    g++
} while (g<=10);

// let numero1=1
// let numer2 =2
// let numer3 =3
// let numer4 =4
// let numer5 =5

//? Propiedad length te indica el numero de elementos que existe en tu lista, vector, array, arreglo
//? INDICE = es la posicion que ocupa tu elemento en la lista,... siempre inicia en cero
// INDICE Y length SON DIFERENTES
// let numeros = [1,2,3,4,5] 
//primera posicion 0 => 1
//ultima posicion 4 => 5
// ultimo posicion=4
console.log(numeros.length);// 5
let caras = ['👩','👨','👨']
// primeraposicion 0 = '👩'
// ultimaaposicion 2 = '👨'
//ultima posicion = 2
let primeraCara=caras[2]
console.log(primeraCara);

console.log(caras.length); //3

let numeros = [1,2,3,4,5] 
for (let posicion=0;posicion<numeros.length;posicion++) {
    console.log(numeros[posicion]); //1
}








