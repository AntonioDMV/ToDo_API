const UserServices = require('../services/users.services');

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
};

const getUsersTodosWithCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const usersTodosWithCategories = await UserServices.usersTodosWithCategories(id);
        res.json(usersTodosWithCategories);
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser,
    getUsersTodosWithCategories,
}