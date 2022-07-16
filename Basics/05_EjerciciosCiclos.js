/**
 * Ejercicio 01
 * Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for
 * 
 */

// Declaración for
for (let i = 2; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        let resul = i * j;
        console.log(i + ' x ' + j + '= ' + resul);
    }
    console.log('\n');
}

// Declaración while
var i = 2;
var j;
while (i <= 12) {
    j = 1;
    while (j <= 12) {
        let resul = i * j;
        console.log(i + ' x ' + j + '= ' + resul);
        j++;
    };
    i++;
    console.log('\n');
}


// Declaración do-while
var i = 2;
var j;
do {
    j = 1;
    do {
        let resul = i * j;
        console.log(i + ' x ' + j + '= ' + resul);
        j++;
    } while (j <= 12);
    i++;
    console.log('\n');
} while (i <= 12);