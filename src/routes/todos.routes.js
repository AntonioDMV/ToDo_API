const {Router} = require('express');
const { createTodosWithCategories, deleteTodo, updateTodosStatus } = require('../controllers/todos.controller')

const router = Router();

router.post('/api/v1/todos', createTodosWithCategories)
router.put('/api/v1/status/:id', updateTodosStatus)
router.delete('/api/v1/todos/:id', deleteTodo);

module.exports = router;