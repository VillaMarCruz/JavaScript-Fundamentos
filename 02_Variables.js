/**
 * Variables
 * 
 * 3 Formas de definir variables
 * 
 * var
 * let
 * const
 * 
 */

// Variables con VAR
var nombre = "Marlon";
console.log(nombre);

var edad = 27;
console.log(edad);

var persona = {
    nombre: "Marlon",
    apellido: "Villamar",
    edad: 22,
    direccion: {
        calle: "Av. Ferroviaria",
        numeroCasa: 645,
    },
    ciudadesVisitadas: [
        'Guayaquil',
        'Cuenca',
        'Machala'
    ]
}

var ciudad;
ciudad = 'Quito';
ciudad = 'Guayaquil';
console.log(ciudad);

// Variables con let
let nombre = 'Marlon';
console.log(nombre);

{
    let saludo = "Hola, soy Marlon";
    console.log(saludo);
}
console.log(saludo);

{
    var saludo = "Hola, soy Marlon";
    console.log(saludo);
}
console.log(saludo);

// variables con const
const PI = 3.14;
console.log(PI);

var nombre = 'Marlon';
var saludo = `Hola soy ${nombre}`;
console.log(saludo);