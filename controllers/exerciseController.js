const exerciseModel = require('../models/exerciseModel');

class ExerciseController {
  // Get all exercises
  getAllExercises(req, res) {
    try {
      const exercises = exerciseModel.getAllExercises();
      res.json({
        success: true,
        count: exercises.length,
        data: exercises
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch exercises',
        message: error.message
      });
    }
  }

  // Get exercise by ID
  getExerciseById(req, res) {
    try {
      const { id } = req.params;
      const exercise = exerciseModel.getExerciseById(id);
      
      if (!exercise) {
        return res.status(404).json({
          success: false,
          error: 'Exercise not found',
          message: `No exercise found with ID: ${id}`
        });
      }

      res.json({
        success: true,
        data: exercise
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch exercise',
        message: error.message
      });
    }
  }

  // Get exercises by body part
  getExercisesByBodyPart(req, res) {
    try {
      const { bodypart } = req.params;
      const exercises = exerciseModel.getExercisesByBodyPart(bodypart);
      
      if (exercises.length === 0) {
        return res.status(404).json({
          success: false,
          error: 'No exercises found',
          message: `No exercises found for body part: ${bodypart}`
        });
      }

      res.json({
        success: true,
        bodyPart: bodypart,
        count: exercises.length,
        data: exercises
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch exercises by body part',
        message: error.message
      });
    }
  }

  // Search exercises by name
  searchExercisesByName(req, res) {
    try {
      const { name } = req.params;
      const exercises = exerciseModel.searchExercisesByName(name);
      
      if (exercises.length === 0) {
        return res.status(404).json({
          success: false,
          error: 'No exercises found',
          message: `No exercises found matching: ${name}`
        });
      }

      res.json({
        success: true,
        searchTerm: name,
        count: exercises.length,
        data: exercises
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to search exercises',
        message: error.message
      });
    }
  }

  // Get all body parts
  getAllBodyParts(req, res) {
    try {
      const bodyParts = exerciseModel.getAllBodyParts();
      
      res.json({
        success: true,
        count: bodyParts.length,
        data: bodyParts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch body parts',
        message: error.message
      });
    }
  }

  // Get exercises by equipment
  getExercisesByEquipment(req, res) {
    try {
      const { equipment } = req.params;
      const exercises = exerciseModel.getExercisesByEquipment(equipment);
      
      if (exercises.length === 0) {
        return res.status(404).json({
          success: false,
          error: 'No exercises found',
          message: `No exercises found for equipment: ${equipment}`
        });
      }

      res.json({
        success: true,
        equipment: equipment,
        count: exercises.length,
        data: exercises
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch exercises by equipment',
        message: error.message
      });
    }
  }

  // Get exercises by difficulty
  getExercisesByDifficulty(req, res) {
    try {
      const { difficulty } = req.params;
      const exercises = exerciseModel.getExercisesByDifficulty(difficulty);
      
      if (exercises.length === 0) {
        return res.status(404).json({
          success: false,
          error: 'No exercises found',
          message: `No exercises found for difficulty: ${difficulty}`
        });
      }

      res.json({
        success: true,
        difficulty: difficulty,
        count: exercises.length,
        data: exercises
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch exercises by difficulty',
        message: error.message
      });
    }
  }

  // Get random exercises
  getRandomExercises(req, res) {
    try {
      const count = parseInt(req.query.count) || 5;
      const exercises = exerciseModel.getRandomExercises(count);
      
      res.json({
        success: true,
        requested: count,
        count: exercises.length,
        data: exercises
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch random exercises',
        message: error.message
      });
    }
  }

  // Get exercise statistics
  getExerciseStats(req, res) {
    try {
      const stats = exerciseModel.getExerciseStats();
      
      res.json({
        success: true,
        data: stats
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch exercise statistics',
        message: error.message
      });
    }
  }

  // Filter exercises with multiple criteria
  filterExercises(req, res) {
    try {
      const filters = req.query;
      const exercises = exerciseModel.filterExercises(filters);
      
      res.json({
        success: true,
        filters: filters,
        count: exercises.length,
        data: exercises
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to filter exercises',
        message: error.message
      });
    }
  }
}

module.exports = new ExerciseController();
