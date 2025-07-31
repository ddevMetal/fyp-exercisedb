# 🚀 Deployment Guide - Render.com

Step-by-step guide to deploy your FYP Exercise Database API to Render.com.

## 📋 Prerequisites

1. ✅ GitHub account
2. ✅ Render.com account (free tier available)
3. ✅ Your API code ready

## 🗂️ Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `fyp-exercisedb`
4. **Description**: `Comprehensive REST API for fitness exercises - FYP Project`
5. **Set to Public** (required for free Render deployment)
6. **Initialize with README**: ✅ Check this
7. **Click "Create repository"**

### Option B: Using Git Commands

```bash
# Navigate to your project folder
cd c:\FYP\fitness-api

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - FYP Exercise Database API"

# Add remote repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/fyp-exercisedb.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📤 Step 2: Upload Your Code to GitHub

If you used Option A above, now upload your files:

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/fyp-exercisedb.git
cd fyp-exercisedb
```

2. **Copy your API files** to this folder:
   - `server.js`
   - `package.json`
   - `controllers/` folder
   - `data/` folder
   - `models/` folder
   - `routes/` folder
   - `README.md`
   - `LICENSE`
   - `.gitignore`

3. **Commit and push**:
```bash
git add .
git commit -m "Add complete fitness API with 20 exercises"
git push origin main
```

## 🌐 Step 3: Deploy to Render.com

### 3.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub (recommended)
3. Authorize Render to access your repositories

### 3.2 Create New Web Service
1. **Dashboard** → **"New +"** → **"Web Service"**
2. **Connect repository**: Select `fyp-exercisedb`
3. **Configure deployment**:

   | Setting | Value |
   |---------|-------|
   | **Name** | `fyp-exercisedb` |
   | **Environment** | `Node` |
   | **Region** | `Oregon (US West)` or closest to you |
   | **Branch** | `main` |
   | **Build Command** | `npm install` |
   | **Start Command** | `npm start` |

### 3.3 Advanced Settings (Optional)
1. **Environment Variables**: Usually not needed for this project
2. **Auto-Deploy**: ✅ Enabled (deploys automatically on git push)

### 3.4 Deploy
1. **Click "Create Web Service"**
2. **Wait for deployment** (usually 2-5 minutes)
3. **Get your live URL**: `https://fyp-exercisedb.onrender.com`

## ✅ Step 4: Test Your Deployed API

### 4.1 Test Endpoints
```bash
# Replace with your actual Render URL
https://fyp-exercisedb.onrender.com/api/exercises
https://fyp-exercisedb.onrender.com/api/exercises/bodypart/chest
https://fyp-exercisedb.onrender.com/api/exercises/1
https://fyp-exercisedb.onrender.com/api/bodyparts
```

### 4.2 Test in Browser
Open these URLs in your browser:
- `https://fyp-exercisedb.onrender.com/` (API documentation)
- `https://fyp-exercisedb.onrender.com/api/exercises` (all exercises)

## 📱 Step 5: Update Flutter App

Update your Flutter app to use the live API:

```dart
class ExerciseService {
  // Replace with your actual Render URL
  static const String baseUrl = 'https://fyp-exercisedb.onrender.com';
  
  static Future<List<Exercise>> getAllExercises() async {
    final response = await http.get(
      Uri.parse('$baseUrl/api/exercises')
    );
    // ... rest of your code
  }
}
```

## 🔧 Troubleshooting

### Common Issues & Solutions

**1. Build Failed**
```bash
# Check package.json has correct start script
"scripts": {
  "start": "node server.js"
}
```

**2. Port Issues**
```javascript
// Make sure server.js uses process.env.PORT
const PORT = process.env.PORT || 3000;
```

**3. CORS Issues**
```javascript
// Ensure CORS is enabled in server.js
app.use(cors());
```

**4. 404 Errors**
- Check all file paths are correct
- Ensure `data/exercises.json` is included in repository

### Render Logs
1. Go to your Render dashboard
2. Click on your service
3. View **"Logs"** tab for error details

## 🚀 Next Steps

### For Your Flutter Project Repository

Create a **separate repository** for your Flutter app:

```bash
# Create new Flutter project repository
git clone https://github.com/yourusername/fyp-flutter-fitness-app.git
cd fyp-flutter-fitness-app

# Add API service
# lib/services/exercise_service.dart
```

### Flutter Service Example
```dart
// lib/services/exercise_service.dart
class ExerciseService {
  static const String baseUrl = 'https://fyp-exercisedb.onrender.com';
  
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
```

## 📞 Support

- **Render Documentation**: [docs.render.com](https://docs.render.com)
- **GitHub Issues**: Create issues in your repository
- **API Status**: Check your Render dashboard

---

**🎉 Congratulations! Your API is now live and ready for your Flutter app!**

**Live API URL**: `https://fyp-exercisedb.onrender.com`
