const Todos = require("../models/todos.models");


class TodosServices {

    static async create(newTodo) {
        try {
            const result = await Todos.create(newTodo);
            return result;
        } catch (error) {
            throw error;
        }
    }

     static async update(newStatus, id) {
         try {
             const result = await Todos.update(newStatus, {
                 where: { id },
             });
             return result;
         } catch (error) {
             throw error;
         }
     }


    static async delete(id) {
        try {
            const result = Todos.destroy({
                where: { id },
            });
            return result;
        } catch (error) {
            throw error
        }
    }

}


module.exports = TodosServices;