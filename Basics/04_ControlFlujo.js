/**
 * Control de Flujo
 */

// Estructura IF
// if (condicion) {

// }

var llueve = false;
if (llueve) {
    console.log('Necesito una sombrilla.');
}

var administrador = 'administrador';
if (administrador === 'administrador') {
    console.log('Bienvenido al sistema.');
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 18;

if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad.');
} else {
    console.log('Es menor de edad.');
}

var semaforo = 'purpura';

if (semaforo === 'verde') {
    console.log('Arranca');
} else if (semaforo === 'amarillo') {
    console.log('Listo');
} else if (semaforo === 'rojo') {
    console.log('Motores apagados');
} else {
    console.log('Color no identificado');
}

// SWITCH
var producto = 'Naranjas';

switch (producto) {
    case 'Papaya':
        console.log('Las papayas cuestan $1 cada libra');
        break;
    case 'Naranjas':
        console.log('Las naranjas cuestan $1 cada libra');
        break;
    case 'Mango':
        console.log('El mango cuesta $2 cada libra');
        break
    default:
        console.log('Este caso se cumple si ninguno de los anteriores cumple la expresión');
        break;
}