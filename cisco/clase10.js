//ERRORES
console.lo('maria') //TypeError

let nombre = 'juana'
console.log(nombres) //ReferenceError

// let numero= [1,2,3,4,4,4]
const numeros = Array(-4).fill(3) //RangeError:

console.log(numeros)
try {
   eval( `iff (true) {
        console.log('es verdad');
    } else {
        console.log('es falso');

    }`) //SyntaxError:
    // let c =b
    // console.log(c)
} catch (error) {
    console.log('error 🤓', error.message )
}

console.log('hola')

console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

console.log(Math.pow("abc", "def")); // -> NaN
console.log(Math.max(...[3,8,9,6,7]));
console.log(Math.min(...[3,8,9,6,7]));
console.log(Math.pow(3,2));

let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2
let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5


try {
    let z =b
} catch (error) {
    try {
        let b =z
    } catch (error) {
        try {
            let c = f
        } catch (error) {
            console.log(error)
        }
        console.log(error)
    }
    console.log(error)
}finally{
    console.log('fin')
}



let c = b

console.log("start"); // -> start
try {
    throw 0;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end




