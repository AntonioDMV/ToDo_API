const TodosServices = require('../services/todos.services');

const createTodosWithCategories = async (req, res) => {
    try {
        const newTodo = req.body;
        const todos = await TodosServices.create(newTodo);
        res.status(201).json(todos)
    } catch (error) {
        res.status(error).json(error)
    }
}

 const updateTodosStatus = async (req, res) => {
     try {
         const { id } = req.params;
         const newStatus = req.body;
         await TodosServices.update(newStatus, id);
         res.status(201).send();
     } catch (error) {
         res.status(400).json(error);
     }
 };


const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodosServices.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createTodosWithCategories,
    updateTodosStatus,
    deleteTodo,
};