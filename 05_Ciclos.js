/**
 * Ciclos
 */

//While
var contador = 0;
while (contador <= 5) {
    console.log('Hola mundo!! > ' + contador);
    contador++;
}

// Do while
var contador = 1;

do {
    console.log('Hola mundo!! > ' + contador);
    contador++;
} while (contador <= 10);

// For
var maximo = 10;

for (let i = 0; i < maximo; i++) {
    console.log('Hola mundo!! > ' + i);
}

// For in
var persona = {
    nombre: 'Marlon',
    apellido: 'Villamar',
    edad: 22
};

for (let clave in persona) {
    console.log(clave, persona[clave]);
}


// For of
var arreglo = [0, 1, 2, 3, 4, 5];
var nombre = 'Marlon';
for (let valor of nombre) {
    console.log(valor);
}