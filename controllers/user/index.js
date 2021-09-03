const {createUser} = require('./createUser.controller');
const {listAllUsers} = require('./listAllUsers.controller')
const {findUserById} = require('./findUserById.controller')
const {updateUserById} = require('./updateUserById.controller');





module.exports = {
    createUser,
    listAllUsers,
    findUserById,
    updateUserById
}