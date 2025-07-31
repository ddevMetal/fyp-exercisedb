const fs = require('fs');
const path = require('path');

class ExerciseModel {
  constructor() {
    this.exercisesPath = path.join(__dirname, '../data/exercises.json');
    this.exercises = this.loadExercises();
  }

  // Load exercises from JSON file
  loadExercises() {
    try {
      const data = fs.readFileSync(this.exercisesPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading exercises:', error);
      return [];
    }
  }

  // Get all exercises
  getAllExercises() {
    return this.exercises;
  }

  // Get exercise by ID
  getExerciseById(id) {
    return this.exercises.find(exercise => exercise.id === parseInt(id));
  }

  // Get exercises by body part
  getExercisesByBodyPart(bodyPart) {
    return this.exercises.filter(exercise => 
      exercise.bodyPart.toLowerCase() === bodyPart.toLowerCase()
    );
  }

  // Search exercises by name
  searchExercisesByName(name) {
    const searchTerm = name.toLowerCase();
    return this.exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm)
    );
  }

  // Get all unique body parts
  getAllBodyParts() {
    const bodyParts = [...new Set(this.exercises.map(exercise => exercise.bodyPart))];
    return bodyParts.map(bodyPart => ({
      name: bodyPart,
      exerciseCount: this.exercises.filter(ex => ex.bodyPart === bodyPart).length
    }));
  }

  // Get exercises by equipment
  getExercisesByEquipment(equipment) {
    return this.exercises.filter(exercise =>
      exercise.equipment.toLowerCase() === equipment.toLowerCase()
    );
  }

  // Get exercises by difficulty
  getExercisesByDifficulty(difficulty) {
    return this.exercises.filter(exercise =>
      exercise.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
  }

  // Get exercises by category
  getExercisesByCategory(category) {
    return this.exercises.filter(exercise =>
      exercise.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Get random exercises
  getRandomExercises(count = 5) {
    const shuffled = [...this.exercises].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Get exercise statistics
  getExerciseStats() {
    return {
      totalExercises: this.exercises.length,
      bodyParts: this.getAllBodyParts().length,
      equipment: [...new Set(this.exercises.map(ex => ex.equipment))].length,
      difficulties: [...new Set(this.exercises.map(ex => ex.difficulty))].length,
      categories: [...new Set(this.exercises.map(ex => ex.category))].length
    };
  }

  // Filter exercises with multiple criteria
  filterExercises(filters) {
    let filteredExercises = [...this.exercises];

    if (filters.bodyPart) {
      filteredExercises = filteredExercises.filter(ex =>
        ex.bodyPart.toLowerCase() === filters.bodyPart.toLowerCase()
      );
    }

    if (filters.equipment) {
      filteredExercises = filteredExercises.filter(ex =>
        ex.equipment.toLowerCase() === filters.equipment.toLowerCase()
      );
    }

    if (filters.difficulty) {
      filteredExercises = filteredExercises.filter(ex =>
        ex.difficulty.toLowerCase() === filters.difficulty.toLowerCase()
      );
    }

    if (filters.category) {
      filteredExercises = filteredExercises.filter(ex =>
        ex.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    return filteredExercises;
  }
}

module.exports = new ExerciseModel();
