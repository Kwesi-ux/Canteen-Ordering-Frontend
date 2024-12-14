Canteen Ordering System

Project Overview

This web application allows students to place food orders online. It is developed using Express.js, React, Node.js, and PostgreSQL. Users can select from a wide variety of food options and place orders conveniently.

Hosted Version

Link: Canteen Ordering System

Note: The hosted version might be slow as it is hosted on free servers.

GitHub Links

Backend Repository: GitHub Backend Link

Testing Credentials for Hosted Version

Username: testuser@example.com

Password: password123



Features

1. Basic Styling and UI/UX

Designed with Tailwind CSS for a clean and consistent look.

Focused on intuitive navigation and user-friendly design to enhance user experience.

2. Error Handling and Validation

Basic error handling and validation for user inputs (e.g., form submissions).

Informative error messages to guide users in case of invalid actions.

3. Checklist of Implemented Features





Installation Guide

Prerequisites

Ensure you have the following installed on your machine:

Node.js

npm (Node Package Manager)

PostgreSQL

Steps

1. Clone the Repository

git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

2. Install Dependencies

Navigate to the backend directory and install the dependencies:

cd backend
npm install

Then, navigate to the frontend directory and install the dependencies:

cd ../frontend
npm install

3. Set Up PostgreSQL Database

Set up your PostgreSQL database and ensure it is running.

4. Set Up Environment Variables

Copy the sample environment file to create a new .env file:

cp backend/.env

Edit the backend/.env file to include your database credentials:

DB_PORT=5432

DB_HOST="db host url"

DB_PORT="dbport"

DB_USER="dbUsername"

DB_PASSWORD="password"

DB_DATABASE="your database"

DB_SSL='true'



5. Run the Application

Start the Backend Server

cd backend
node server.js

Start the Frontend Development Server

cd ../frontend
npm run dev



Contributing

Contributions are welcome! Please feel free to fork the repository and submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

