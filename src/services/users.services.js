const Categories = require('../models/categories.models');
const Todos = require('../models/todos.models');
const Users = require('../models/users.models');

class UserServices {
    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    };

    static async usersTodosWithCategories(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ['username'],
                include: [
                    {
                        model: Todos,
                        attributes: ['id', 'title', 'description', 'status'],
                        include: {
                            model: Categories,
                            attributes: ['name'],
                        }
                    },
                ]
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

};


module.exports = UserServices;