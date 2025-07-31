const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// GET /api/exercises - Get all exercises
router.get('/', exerciseController.getAllExercises);

// GET /api/exercises/stats - Get exercise statistics
router.get('/stats', exerciseController.getExerciseStats);

// GET /api/exercises/random - Get random exercises
router.get('/random', exerciseController.getRandomExercises);

// GET /api/exercises/filter - Filter exercises with multiple criteria
router.get('/filter', exerciseController.filterExercises);

// GET /api/exercises/bodypart/:bodypart - Get exercises by body part
router.get('/bodypart/:bodypart', exerciseController.getExercisesByBodyPart);

// GET /api/exercises/equipment/:equipment - Get exercises by equipment
router.get('/equipment/:equipment', exerciseController.getExercisesByEquipment);

// GET /api/exercises/difficulty/:difficulty - Get exercises by difficulty
router.get('/difficulty/:difficulty', exerciseController.getExercisesByDifficulty);

// GET /api/exercises/search/:name - Search exercises by name
router.get('/search/:name', exerciseController.searchExercisesByName);

// GET /api/exercises/:id - Get exercise by ID
router.get('/:id', exerciseController.getExerciseById);

module.exports = router;
