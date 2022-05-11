/**
 * Ejercicio 01
 * Escribir un programa que según el día de la semana ingresado proporcione el día en ingles.
 * 
 * El programa debe ser escrito dos veces, una con la declaración if else y 
 * otra con la declaración switch.
 */

// DECLARACION IF ELSE
var dia = 'Martes';
if (dia == 'Lunes') {
    console.log('Monday');
} else if (dia == 'Martes') {
    console.log('Tuesday');
} else if (dia == 'Miercoles') {
    console.log('Wednesday');
} else if (dia == 'Jueves') {
    console.log('Thursday');
} else if (dia == 'Viernes') {
    console.log('Friday');
} else if (dia == 'Sabado') {
    console.log('Saturday');
} else if (dia == 'Domingo') {
    console.log('Sunday');
} else {
    console.log('Día no identificado.');
}

//DECLARACION SWITCH
var dia = 'Domingo'

switch (dia) {
    case 'Lunes':
        console.log('Monday');
        break;
    case 'Martes':
        console.log('Tuesday');
        break;
    case 'Miercoles':
        console.log('Wednesday');
        break;
    case 'Jueves':
        console.log('Thursday');
        break;
    case 'Viernes':
        console.log('Friday');
        break;
    case 'Sabado':
        console.log('Saturday');
        break;
    case 'Domingo':
        console.log('Sunday');
        break;
    default:
        console.log('Dia no identificado.');
        break;
}

/**
 * Ejercicio 02
 * Escribir un programa que según el total de la compra, se agregue un valor de envio.
 * 
 * Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
 * 
 * Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
 * 
 * Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
 * 
 * Si la compra supera los $50 el gasto de envío será gratuito
 * 
 * El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

// DECLARACIÓN IF ELSE

var valorCompra = -2;

if (valorCompra > 0 && valorCompra <= 10) {
    console.log('Gasto de envió de $3.');
} else if (valorCompra <= 20 && valorCompra >= 10) {
    console.log('Gasto de envío de $5');
} else if (valorCompra <= 50 && valorCompra >= 20) {
    console.log('Gasto de envío de $7');
} else if (valorCompra > 50) {
    console.log('Envío gratis.');
} else {
    console.log('No existe valor de compra');
}

// DECLARACIÓN SWITCH
var valorCompra = 9;

switch (valorCompra) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Gasto de envió de $3.');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log('Gasto de envío de $5');
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
        console.log('Gasto de envío de $7');
        break
    default:
        console.log('Envío gratis');
        break;
}