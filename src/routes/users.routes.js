const { Router } = require('express');
const { createUser, getUsersTodosWithCategories } = require('../controllers/users.controller');
const router = Router();

router.post('/api/v1/users', createUser);
router.get('/api/v1/users/:id/todos', getUsersTodosWithCategories)



module.exports = router;