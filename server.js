const express = require('express');
const cors = require('cors');
const exerciseRoutes = require('./routes/exerciseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/exercises', exerciseRoutes);

// Body parts route
app.get('/api/bodyparts', (req, res) => {
  const exerciseController = require('./controllers/exerciseController');
  exerciseController.getAllBodyParts(req, res);
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'FYP Exercise Database API',
    version: '1.0.0',
    status: 'active',
    timestamp: new Date().toISOString(),
    endpoints: {
      'GET /api/exercises': 'Get all exercises',
      'GET /api/exercises/bodypart/:bodypart': 'Get exercises by body part',
      'GET /api/exercises/:id': 'Get exercise by ID',
      'GET /api/exercises/search/:name': 'Search exercises by name',
      'GET /api/bodyparts': 'Get all body parts',
      'GET /health': 'Health check endpoint'
    },
    documentation: 'https://github.com/yourusername/fyp-exercisedb#readme'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Fitness API Server running on port ${PORT}`);
  console.log(`📖 API Documentation available at http://localhost:${PORT}/`);
});

module.exports = app;
