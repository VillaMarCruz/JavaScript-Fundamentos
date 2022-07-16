const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const main = async() => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let { data: { results } } = response;
    let characters = results.map((character) => {
        return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species
        };
    })

    let cabeceras = (Object.keys(characters[0]).join(','));
    let personajes = characters.map((personaje) => Object.values(personaje).join(','))
        .join('\n');

    await fs.writeFile(path.join(__dirname, 'data.csv'), cabeceras + '\n' + personajes);

}

main();