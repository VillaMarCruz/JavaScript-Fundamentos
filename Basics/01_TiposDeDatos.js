/**
 * Tipos de datos
 */

// Número - number
console.log(27);
console.log(27.56);

// Texto - string
console.log("Marlon Villamar");
console.log("Geovanny Cruz");
console.log(`Hola, Soy Marlon`);

// Lógicos - booleans
console.log(true);
console.log(false);

// Indefinido - undefined
console.log(undefined);

// Null
console.log(null);

/**
 * Tipos de datos estructurados
 */

// Objeto - Object
console.log({
    nombre: "Marlon Geovanny",
    apellido: "Villamar Cruz",
    fechaNacimiento: null,
    esAlto: false,
    ciudades: ["Quito", "Guayaquil", "Cuenca"],
    direccion: { callePrincipal: "Ferroviaria" },
});

// Arreglo - Array
console.log(["Ecuador", "Perú", "Colombia"]);
console.log([21, true, { nombre: "Marlon" },
    [1, 2, 3]
]);

var fechaEntrega = new Date("2021/12/20");
var fechaDevolucion = new Date("2021/12/24");

m2 = fechaEntrega.getTime();
m1 = fechaDevolucion.getTime();
m = m1 - m2;
var year = 1000 * 60 * 60 * 24;

console.log(m / year);