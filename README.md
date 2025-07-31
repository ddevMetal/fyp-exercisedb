# 🏋️ FYP Exercise Database API

A comprehensive REST API for fitness exercises with body parts, exercise details, and GIF animations. Perfect for Flutter mobile applications.

## 🚀 Features

- **20+ Exercise Database** with detailed information
- **Body Part Categories**: chest, back, legs, arms, shoulders, core, full body
- **High-Quality GIFs** from reliable fitness websites
- **RESTful API Design** with comprehensive endpoints
- **Difficulty Levels**: beginner, intermediate, advanced
- **Equipment Types**: bodyweight, dumbbells, barbell, machines
- **Target Muscles** and detailed instructions

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/exercises` | Get all exercises |
| GET | `/api/exercises/:id` | Get exercise by ID |
| GET | `/api/exercises/bodypart/:bodypart` | Get exercises by body part |
| GET | `/api/exercises/search/:name` | Search exercises by name |
| GET | `/api/exercises/equipment/:equipment` | Get exercises by equipment |
| GET | `/api/exercises/difficulty/:difficulty` | Get exercises by difficulty |
| GET | `/api/exercises/random` | Get random exercises |
| GET | `/api/exercises/filter` | Filter with multiple criteria |
| GET | `/api/bodyparts` | Get all body parts |
| GET | `/api/exercises/stats` | Get database statistics |

## 🌐 Live Demo

**API Base URL**: `https://fyp-exercisedb.onrender.com`

### Example Requests:
```bash
# Get all exercises
GET https://fyp-exercisedb.onrender.com/api/exercises

# Get chest exercises
GET https://fyp-exercisedb.onrender.com/api/exercises/bodypart/chest

# Search for push exercises
GET https://fyp-exercisedb.onrender.com/api/exercises/search/push

# Get exercise by ID
GET https://fyp-exercisedb.onrender.com/api/exercises/1
```

## 🏃‍♂️ Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/fyp-exercisedb.git
cd fyp-exercisedb

# Install dependencies
npm install

# Start the server
npm start

# Server will run on http://localhost:3000
```

### Environment Variables
```env
PORT=3000
NODE_ENV=production
```

## 📱 Flutter Integration

### Dependencies
```yaml
dependencies:
  http: ^1.1.0
  cached_network_image: ^3.3.0
```

### Example Usage
```dart
import 'package:http/http.dart' as http;
import 'package:cached_network_image/cached_network_image.dart';

class ExerciseService {
  static const String baseUrl = 'https://fyp-exercisedb.onrender.com';
  
  // Get exercises by body part
  static Future<List<Exercise>> getExercisesByBodyPart(String bodyPart) async {
    final response = await http.get(
      Uri.parse('$baseUrl/api/exercises/bodypart/$bodyPart')
    );
    
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return (data['data'] as List)
          .map((json) => Exercise.fromJson(json))
          .toList();
    }
    throw Exception('Failed to load exercises');
  }
}

// Display exercise GIF
Widget buildExerciseGif(String gifUrl) {
  return CachedNetworkImage(
    imageUrl: gifUrl,
    placeholder: (context, url) => CircularProgressIndicator(),
    errorWidget: (context, url, error) => Icon(Icons.fitness_center),
    fit: BoxFit.cover,
  );
}
```

## 📝 Exercise Data Structure

```json
{
  "id": 1,
  "name": "Push-ups",
  "bodyPart": "chest",
  "targetMuscles": ["pectorals", "triceps", "deltoids"],
  "equipment": "bodyweight",
  "difficulty": "beginner",
  "instructions": [
    "Start in a plank position with your hands slightly wider than shoulder-width apart",
    "Lower your body until your chest nearly touches the floor",
    "Push yourself back up to the starting position",
    "Keep your core tight throughout the movement"
  ],
  "gifUrl": "https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif",
  "category": "strength"
}
```

## � Available Body Parts

- `chest` - Chest exercises (Push-ups, Bench Press, Chest Flyes)
- `back` - Back exercises (Pull-ups, Deadlifts, Rowing)
- `legs` - Leg exercises (Squats, Lunges, Leg Press, Calf Raises)
- `arms` - Arm exercises (Bicep Curls, Tricep Dips)
- `shoulders` - Shoulder exercises (Shoulder Press, Lateral Raises, Face Pulls)
- `core` - Core exercises (Plank, Russian Twists, Mountain Climbers)
- `full body` - Full body exercises (Burpees, Jumping Jacks)

## �️ Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: JSON file (easily upgradeable to MongoDB)
- **Deployment**: Render.com
- **CORS**: Enabled for cross-origin requests
- **Error Handling**: Comprehensive error responses

## � Deployment

### Deploy to Render.com

1. **Connect GitHub Repository**
2. **Build Command**: `npm install`
3. **Start Command**: `npm start`
4. **Environment Variables**: 
   - `PORT` (automatically set by Render)
   - `NODE_ENV=production`

### Manual Deployment
```bash
# Build for production
npm install --production

# Start the server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-exercise`)
3. Commit your changes (`git commit -am 'Add new exercise'`)
4. Push to the branch (`git push origin feature/new-exercise`)
5. Create a Pull Request

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Exercise GIFs sourced from [FitnessProgramer.com](https://fitnessprogramer.com)
- Additional GIFs from [InspireUSAFoundation.org](https://www.inspireusafoundation.org)
- Built for Final Year Project (FYP) - Flutter Fitness App

## 📞 Support

For support, email your-email@example.com or create an issue in this repository.

---

**🏋️ Built with ❤️ for fitness enthusiasts and Flutter developers!**
