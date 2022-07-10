/**
 * Promises
 */
const getData1 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Marlon',
                apellido: 'Villamar'
            })
        }, 3000)
    } else {
        reject('No pudimos obtener los datos');
    }
});

const getData2 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Geovanny',
                apellido: 'Villamar'
            })
        }, 3000)
    } else {
        reject('No pudimos obtener los datos 2');
    }
});

console.log('Inicio');
getData1(false)
    .then((data) => {
        console.log(data);
        return getData2(true);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
console.log('Fin');

// ASYNC - AWAY
const getDatas1 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Marlon',
                apellido: 'Villamar'
            })
        }, 3000)
    } else {
        reject('No pudimos obtener los datos');
    }
});

const getDatas2 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Geovanny',
                apellido: 'Villamar'
            })
        }, 3000)
    } else {
        reject('No pudimos obtener los datos 2');
    }
});

const main = async() => {
    try {
        let resultado = await getDatas1(false);
        let resultado2 = await getDatas2(true);
        console.log(resultado);
        console.log(resultado2);
    } catch (error) {
        console.log(error);
    }
};

main();