# Homework 3: React Exercise
## CPSC 349 - Web Front-End Engineering
### 1. Objectives
This assignment is designed to help you:
• Develop proficiency in React.
• Strengthen your ability to replicate an existing web page’s layout and functionality
with precision.
• Build foundational skills for generating dynamic HTML output in future server-side
scripting tasks.
### 2. Description
In this exercise, you will create a React web page from scratch.
You will be provided with a demo video (Demo.mov) that shows the target page’s appearance and
behavior.
Your goal is to reproduce the demo as closely as possible using React components, state, and
props.
### 3. Requirements
#### Development Environment
• Use Visual Studio Code as your code editor (any other editor is also acceptable).
• Do not use website builders or external UI frameworks (e.g., Bootstrap, Material UI).
• Use React version 16.8 or later.
• Apply CSS for all styling.
#### React Setup
Follow the official documentation to create your React app:
React: https://react.dev/learn/start-a-new-react-project
### 4. Installation Guide
#### Windows Setup
1. 2. 3. 4. Visit the Node.js official website.
Download the LTS (Long-Term Support) version (e.g., Node 18 LTS).
Run the installer (.msi file):
o Click Next through all steps.
o Check “Automatically install the necessary tools.”
o Complete the installation.
Verify installation in Command Prompt or PowerShell:
node -v
npm -v
Example output:
v18.17.0
9.6.7
#### macOS Setup
1. Visit nodejs.org.
2. 3. Download the macOS Installer (.pkg) for the LTS version.
Run the installer and follow the prompts.
### 4. Verify installation:
node -v
npm -v
### 5. Features
Your React application must include the following features:
#### Movie Display
• Fetch movie data from The Movie Database (TMDB) API.
#### TMDB API Documentation
• Sign up for a free TMDB API key to access movie data.
• Display 20 movies per page, including:
o Movie poster (image)
o Movie title
o Release date
o Average rating
#### Pagination
• Display the current page number at the bottom.
• Include “Previous” and “Next” buttons to navigate between pages.
#### Search Functionality
• Implement a search bar that allows users to search for movies by title.
• Display only the movies that match the search query.
#### Sorting
• Add a dropdown menu to sort movies by:
o Release date
o Average rating
#### Demo Consistency
• Ensure all visuals, layout, and interactions match the behavior shown in Demo.mov.
