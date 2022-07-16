const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers: () => data,
    getUser: (id) => {
        let identificador = Number(id);
        let user = data.filter((person) => person.id === identificador)[0];
        return user;
    },
    createUser: (dataUser) => {
        let newUser = {
            id: data.length + 1,
            ...dataUser
        };
        data.push(newUser);
        return newUser;
    },
    updateUser: (id, updateUser) => {
        let identificador = Number(id);
        let usuarioActualizado = data.find((person) => person.id === identificador);

        usuarioActualizado.first_name = updateUser.first_name;
        usuarioActualizado.last_name = updateUser.last_name;
        usuarioActualizado.email = updateUser.email;

        return updateUser;
    },
    deleteUser: (id) => {
        let identificador = Number(id);
        let posicion = data.findIndex((person) => person.id === identificador);
        let user = data.splice(posicion, 1)
        return user;
    }
};