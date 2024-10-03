const fs = require('fs');
const path = require('path');

// Base folder path where you want to create the directories and copy files
const baseFolder = 'C:\\Users\\PRUDENCE SCHOOL\\Desktop\\WEB DEVELOPMENT\\HTML PRACTCE QUESTIONS\\CSS-PRACTICE-QUESTIONS';

// Files to be copied into each folder
const filesToCopy = [
  'C:\\Users\\PRUDENCE SCHOOL\\Desktop\\WEB DEVELOPMENT\\HTML PRACTCE QUESTIONS\\CSS-PRACTICE-QUESTIONS\\Practice HTML File For CSS.html',
  'C:\\Users\\PRUDENCE SCHOOL\\Desktop\\WEB DEVELOPMENT\\HTML PRACTCE QUESTIONS\\CSS-PRACTICE-QUESTIONS\\Practice HTML File For CSS 2.html',
  'C:\\Users\\PRUDENCE SCHOOL\\Desktop\\WEB DEVELOPMENT\\HTML PRACTCE QUESTIONS\\CSS-PRACTICE-QUESTIONS\\styles.css'
];

// List of folder names/questions
const questions = [
  "What is CSS, and how does it enhance web design? ✨",
  "Write a simple CSS rule that changes the background color of the body to light blue. 💙",
  "Explain the importance of CSS in responsive web design. 📱",
  "Create a CSS rule to set the font family of all paragraphs to Arial. ✍️",
  // Add the remaining questions here...
];

// Function to sanitize folder names (remove special characters and trim spaces)
const sanitizeFolderName = (folderName) => {
  return folderName.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').trim();
};

// Create each folder and copy files into them
questions.forEach((question) => {
  // Sanitize the folder name by removing special characters
  const folderName = sanitizeFolderName(question);
  
  // Create the full folder path
  const folderPath = path.join(baseFolder, folderName);

  // Create the folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  }

  // Copy each file into the folder
  filesToCopy.forEach((filePath) => {
    // Get the file name from the path
    const fileName = path.basename(filePath);
    
    // Define the target path (inside the newly created folder)
    const targetPath = path.join(folderPath, fileName);

    // Copy the file
    fs.copyFileSync(filePath, targetPath);
    console.log(`Copied ${fileName} to ${folderPath}`);
  });
});

console.log('All folders created and files copied successfully!');
