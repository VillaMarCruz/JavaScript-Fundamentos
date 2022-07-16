/**
 * Operadores
 */

/**
 * Operadores de asignación
 */

// Operador de asignación
var x = 2;
var y = true;

// Operador de asignación de adcion (+=)
var x = 2;
var y = 1;
x += y;
console.log(x);

// Operador de asignación de resta (-=)
var x = 5;
var y = 3;
x -= y;
console.log(x);

// Operador de asignación de multiplicación (*=)
var x = 5;
var y = 3;
x *= y;
console.log(x);

// Operador de asignación de división ( /= )
var x = 10;
var y = 5;
x /= y;
console.log(x);

// Operador de asignación de residuo ( %= )
var x = 10;
var y = 9;
x %= y;
console.log(x);

// Operador de asignación de exponeciación ( **= )
var x = 2;
var y = 2;
x **= y;
console.log(x);

/**
 * Operadores de comparación
 */

// Operador igual ( == )
console.log(3 == 3);
console.log(3 == '3');

// Operador no es igual ( != )
console.log(3 != 3);

// Operador estrictamente igual ( === )
console.log(3 === 3);
console.log(3 === '3');

// Operador desigualdad estricta ( !== )
console.log(3 !== '3');

// Operadores >, >=, <, <=
console.log(3 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 2);

/**
 * Operadores aritemeticos
 * 
 * +, -, *, /, %, **
 */

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// Operadores de incremento ( ++ )
var numero = 0;
//console.log(++numero);
console.log(numero++);
console.log(numero);

// Operador de decremento ( -- )
var numero = 3;
//console.log(--numero);
console.log(numero--);
console.log(numero);

/**
 * Operadores Lógicos
 */

// AND
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

// OR
console.log(false || false);
console.log(true || false);

// NOT
console.log(!true);

// Operador de Cadenas o concatenación ( + )
var nombre = 'Marlon';
var apellido = 'Villamar';
var nombresCompleto = nombre + ' ' + apellido;
console.log(nombresCompleto);

// Operador condicional ( condicion ? val1 : val2 )
console.log(2 > 3 ? 'Es mayor' : 'Es menor');

// Operador de desestructuración
var persona = {
    nombre: 'Marlon',
    apellido: 'Villamar'
};

var { nombre: xyz, apellido } = persona;
console.log(xyz);
console.log(apellido);
console.log(persona);

// Operador de desestructuración de arreglos
var arreglo = [1, 2, 3, 4, 5];
var [primeraPosicion, , , cuartaPosicion] = arreglo;
console.log(cuartaPosicion);

/**
 * Operador de miembro o acceso de propiedades
 */
// Notación punto
var persona = {
    nombre: 'Marlon',
    apellido: 'Villamar'
};
console.log(persona.nombre);
console.log(persona.apellido);

// Notación por corchetes
var persona = {
    nombre: 'Marlon',
    apellido: 'Villamar'
};
console.log(persona['nombre']);

// Notación por corchetes en arreglos
var arreglo = [21, 22, 23, 24, 25]
console.log(arreglo[0]);

// Operación de determinación de tipo ( typeof )
console.log(typeof 'Marlon');
console.log(typeof 21);