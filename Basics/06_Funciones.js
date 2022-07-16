/**
 * Funciones
 */

// Funciones Declarativas
function saludar() {
    console.log('Hola, soy Marlon');
}
saludar();


function saludar(nombre) {
    console.log(`Hola, soy ${nombre}`);
}

saludar('Marlon');

function saludar(nombre) {
    return `Hola, soy ${nombre}`
}
var saludo = saludar('Marlon');
console.log(saludo);

// Expresión o anónimas
var suma = function(a, b) {
    return a + b;
}

console.log(suma(2, 2));

// Función flecha - arrow
var restar = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return 'Solo puede restar números';
    }
};

console.log(restar(5, 2));

var multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 5));