Book Review Web Application

Overview

This project demonstrates a full-stack web application for book reviews. It allows users to view, add, and search for book reviews. The project was developed with an emphasis on full-stack development, responsive design, and working with APIs or JSON data.


Features Implemented

User Authentication: Users can log in to the application to add and manage their book reviews.
Book Review Submission: Users can submit reviews, including book titles, authors, and ratings.
Responsive Design: The application is fully responsive and works on both desktop and mobile devices.
API Integration: The application uses an external API to fetch books and display reviews.
Search Functionality: Users can search for books and reviews using keywords.


Technologies Used

Frontend: React, Tailwind CSS
Backend: Node.js, Express
Database: MySQL 
API: Integration with an external book API (e.g., Google Books API) or a local JSON file for books data
Setup Instructions
Prerequisites
Node.js
NPM
Getting Started
Clone the repository:
 
git clone https://github.com/your-username/book-review-project.git
Install the backend dependencies:
 
cd backend
npm install
Install the frontend dependencies:
 
cd frontend
npm install
Set up environment variables (if applicable) in a .env file:

For API keys
For database connection
Run the application:

Start the backend server:
 
cd backend
npm start
Start the frontend application:
 
cd frontend
npm start
Visit http://localhost:3000 to view the application in your browser.

 
Assumptions
The application uses a mock database or an API for fetching book data. If a live API is unavailable, the data may be hardcoded in a JSON file.
The backend and frontend are running separately, with the frontend making API requests to the backend.
Known Issues
Some mobile views might not be perfectly optimized due to limited time for testing.
License
This project is open-source and available under the MIT License.
