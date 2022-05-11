/**
 * Manipulavión arreglos
 */

// ForEach
var letras = ['a', 'b', 'c', 'd', 'e'];

letras.forEach((elemento) => console.log(elemento));

/********************************************************************************************************* */

// Push - Shift - Pop // Mutables
var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f'); // PUSH - Agregar en el arreglo
console.log(letras);

var primerElemento = letras.shift(); // SHIFT - Obtiene el primer elemento del arreglo // Altera el arreglo
console.log(primerElemento);
console.log(letras);

var ultimoElemento = letras.pop() // POP - Obtiene el ultimo elemento del arreglo // Altera el arreglo
console.log(ultimoElemento);
console.log(letras);

/********************************************************************************************************* */
// Map // Inmutables

var estudiantes = ['Mishelle', 'Pamela', 'Victoria', 'Jennifer'];
/* var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
}); */
var asistencia = estudiantes.map((nombre) => `${nombre}.`);
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var productos = [
    { nombre: 'Camisetas', precio: 15 },
    { nombre: 'Zapatillas', precio: 20 },
    { nombre: 'Pantalones', precio: 25 }
];

var productosImpuesto = productos.map((producto) => {
    return {
        ...producto, //Spread Operation (...)
        impuesto: .12
    };
});

var precios = productos.map((producto) => {
    return producto.precio
});

console.log(productos);
console.log(productosImpuesto);
console.log(precios);

/********************************************************************************************************* */
// Filter // Inmutable
var estudiantes = [
    { nombre: 'Pamela', edad: 23, matriculados: true },
    { nombre: 'Paul', edad: 19, matriculados: true },
    { nombre: 'Victoria', edad: 21, matriculados: false },
    { nombre: 'Jennifer', edad: 19, matriculados: true },
    { nombre: 'Marlon', edad: 25, matriculados: false }
];

/* var filtrado = estudiantes.filter((estudiante) => {
    return estudiante.edad >= 21;
}); */
var filtrado = estudiantes.filter((estudiante) => {
    return estudiante.edad >= 21 && estudiante.matriculados;
});

console.log(estudiantes);
console.log(filtrado);

/********************************************************************************************************* */
// Reduce
var calificaciones = [3, 7, 9, 10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log('Promedio: ' + suma / calificaciones.length);
/************************************************************* */
var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];

// Salida
/* {
    21: 3,
    43: 2
} */
var resultado = edades.reduce((acumulador, edad) => {
    if (!acumulador[edad]) {
        acumulador[edad] = 1;
    } else {
        acumulador[edad]++;
    }
    return acumulador;
}, {})

console.log(edades);
console.log(resultado);
/************************************************************* */
var ventas = [
    { nombre: 'Camisetas', precio: 15, totalVendido: 10 },
    { nombre: 'Zapatillas', precio: 8, totalVendido: 150 },
    { nombre: 'Pantalones', precio: 20, totalVendido: 30 }
];

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$ ${totalVentas}`;
    return acumulador;
}, {});
console.log(ventas);
console.log(resultado);
/************************************************************* */
var estudiantes = [
    { nombre: 'Pamela', edad: 23, matriculados: true },
    { nombre: 'Paul', edad: 19, matriculados: true },
    { nombre: 'Victoria', edad: 21, matriculados: false },
    { nombre: 'Jennifer', edad: 19, matriculados: true },
    { nombre: 'Marlon', edad: 25, matriculados: false }
];

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculados)
    .reduce((acumulador, item) => {
        if (item) {
            acumulador.matriculado++;
        } else {
            acumulador.noMatriculados++;
        }
        return acumulador;
    }, { matriculado: 0, noMatriculados: 0 })
console.log(estudiantes);
console.log(resultado);

/********************************************************************************************************* */
// Some - Every
//var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10];
var numeros = [1, 3, 5, 7, 9];
var resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);

// EVERY
//var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10];
var numeros = [2, 4, 6, 8, 10];
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);