const userDao = require('../dao/userDao');

const createUser = async (userData) => {
    return await userDao.createUser(userData);
};

const getUserById = async (id) => {
    return await userDao.getUserById(id);
};

const getUsers = async () => {
    return await userDao.getUsers();
};

const updateUser = async (id, userData) => {
    return await userDao.updateUser(id, userData);
};

const deleteUser = async (id) => {
    return await userDao.deleteUser(id);
};

module.exports = { createUser, getUserById, getUsers, updateUser, deleteUser };
