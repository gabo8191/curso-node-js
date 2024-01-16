const users = [
    {
        id: 1,
        name: 'Dorian'
    },

    {
        id: 2,
        name: 'Laura'
    },

    {
        id: 3,
        name: 'Carlos'

    }
];

// function getUserById(id) {

//     const user = users.find(function (user) {
//         return user.id == id;
//     });

//     console.log({ user });
// }

// getUserById(1);

//con callback

function getUserById(id, callback) {

    const user = users.find(function (user) {
        return user.id == id;
    });

    if (!user) {
        return callback(`Not exist a user with id ${id}`);
    }

    return callback(null, user);

}

module.exports = {
    getUserById
}