const express = require('express');
const projectController = require('../controllers/projectController');
const authController = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, projectController.getAllProjects);
router.post('/', authenticateToken, projectController.createProjects);

module.exports = router;