@echo off
echo ================================
echo FYP Exercise Database API Setup
echo ================================
echo.

echo 🔍 Checking current directory...
dir /b

echo.
echo 📋 Files ready for GitHub repository:
echo ✅ server.js
echo ✅ package.json  
echo ✅ controllers/
echo ✅ data/
echo ✅ models/
echo ✅ routes/
echo ✅ README.md
echo ✅ LICENSE
echo ✅ .gitignore
echo ✅ DEPLOYMENT.md

echo.
echo 🚀 Next Steps:
echo 1. Create GitHub repository: fyp-exercisedb
echo 2. Upload these files to GitHub
echo 3. Deploy to Render.com using DEPLOYMENT.md guide
echo 4. Update your Flutter app with the live API URL
echo.

echo 📱 Your API will be available at:
echo https://fyp-exercisedb.onrender.com
echo.

echo 🎯 Flutter Integration Example:
echo class ExerciseService {
echo   static const String baseUrl = 'https://fyp-exercisedb.onrender.com';
echo   // ... your code
echo }
echo.

pause
