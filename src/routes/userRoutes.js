const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Define routes
router.get('/user', authMiddleware, userController.getUsers);
router.get('/user/:userId', authMiddleware, userController.getUserById);
router.post('/user', authMiddleware, userController.createUser);
router.put('/user/:userId', authMiddleware, userController.updateUser);
router.patch('/user/:userId', authMiddleware, userController.updateUser);
router.delete('/user/:userId', authMiddleware, userController.deleteUser);

module.exports = router;
