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

var alquileres = {
    cliente: "Maestro Castro",
    maquinaria: "C01",
    fecha_entrega: "20/12/2021",
    fecha_devolucion: "24/12/2021"
};

alquileres.push({ dias: 10 })
console.log(alquileres);

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
        impuesto: producto.precio * 0.12
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
/*********************************************************************************************************/
// FIND - FINDINDEX
var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Marlon' },
    { id: 3, nombre: 'Emily' },
    { id: 4, nombre: 'Andrea' },
    { id: 5, nombre: 'Victoria' },
]
var cliente = clientes.find((cliente) => cliente.id === 1);
console.log(cliente);
console.log(clientes);
// FIND INDEX
var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Marlon' },
    { id: 3, nombre: 'Emily' },
    { id: 4, nombre: 'Andrea' },
    { id: 5, nombre: 'Victoria' },
]
var posicion = clientes.findIndex((cliente) => cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);
/********************************************************************************************************* */
//Include
// Determinar si existe un elementoo en especifico
var mascotas = ['perro', 'gatito', 'conejo'];
var resultado = mascotas.includes('cerdo');
console.log(resultado);
console.log('marlon'.includes('lon'));

var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: 'Ada' },
        { id: 2, nombre: 'Marlon' },
        { id: 3, nombre: 'Emily' },
        { id: 4, nombre: 'Andrea' },
        { id: 5, nombre: 'Victoria' },
    ]

    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}

console.log(buscador('a'));

// JOIN
var elementos = ['aire', 'fuego', 'agua'];
var resultado = elementos.join('--')
console.log(resultado);

var clientes = [
        { id: 1, nombre: 'Ada' },
        { id: 2, nombre: 'Marlon' },
        { id: 3, nombre: 'Emily' },
        { id: 4, nombre: 'Andrea' },
        { id: 5, nombre: 'Victoria' },
    ]
    /* console.log(clientes.join()); */
var csvGenerator = (array, separador = ',') => {
    let headers = Object.keys(array[0]).join(separador);
    let data = array.map((element) => Object.values(element).join(separador));
    console.log(headers);
    data.forEach(element => console.log(element));
}

csvGenerator(clientes);




/* console.log(Object.values({ id: 5, nombre: 'Victoria' }));
console.log(Object.keys({ id: 5, nombre: 'Victoria' })); */


// CONCAT - SORT - SPLICE - SLICE

var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 0];

var array3 = array1.concat(array2);
var array4 = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(array3);

// SORT
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1.sort());

var meses = ['Dic', 'Ene', 'Mar', 'Feb'];
console.log(meses.sort());

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b);
console.log(ordenado);

// SPLICE = Remover elementos del arreglo
var nombres = ['Gabriel', 'Marlon', 'Emily', 'Dayanna'];
nombres.splice(1, 1, 'Ada'); //(Posicion, Cuantos eliminar, Reemplazar)
console.log(nombres);

// SLICE = RETORNAR UNA COPIA DEL ARREGLO (PARTE MAS PEQUEÑA)
var nombres = ['Gabriel', 'Marlon', 'Emily', 'Dayanna'];
var resultado = nombres.slice(1, 3); // Parametros(De donde cortar, Posicion final) No incluye la ultima posicion;
console.log(nombres);
console.log(resultado);