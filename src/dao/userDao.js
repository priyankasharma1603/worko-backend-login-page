const User = require('../models/userModel');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const getUsers = async () => {
    return await User.find({ isActive: true });
};

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndUpdate(id, { isActive: false });
};

module.exports = { createUser, getUserById, getUsers, updateUser, deleteUser };
