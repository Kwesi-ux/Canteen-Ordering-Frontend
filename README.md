```markdown
# Canteen-Ordering-System

This web application allows students to conveniently place food orders online. Developed with a modern tech stack including Express.js, React, Node.js, and PostgreSQL, it provides an intuitive platform for users to select their preferred meals from a wide variety of options.

## Project Overview
- **Hosted Version:** [Canteen-Ordering-System Frontend](https://canteen-ordering-frontend.vercel.app/)
  > *Note: The hosted version may be slow as it is hosted on free servers.*

- **Backend GitHub Repository:** [Canteen-Ordering-System Backend](https://github.com/Kwesi-ux/Canteen-Ordering-System)

- **Testing Credentials for Hosted Version:**
  - **Username:** `testuser@example.com`
  - **Password:** `password123`

## Features Implemented

### 1. Basic Styling and UI/UX
- A simple and clean design using **Tailwind CSS** ensures a consistent look and feel across the platform.
- Emphasis on usability and intuitive navigation to enhance the user experience.

### 2. Error Handling and Validation
- Basic error handling and validation for user inputs (e.g., form submissions) are implemented.
- Informative error messages guide users in case of invalid actions.

## Checklist

- [x] Backend API built
- [x] API testing completed
- [x] Backend successfully deployed on Render
- [x] Frontend deployed on Vercel

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Steps

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. **Install Dependencies**

Navigate to the backend directory and install the dependencies:
```bash
cd backend
npm install
```

Then, navigate to the frontend directory and install the dependencies:
```bash
cd ../frontend
npm install
```

3. **Set Up PostgreSQL Database**
Ensure PostgreSQL is installed and set up on your system. Create a database for the project.

4. **Set Up Environment Variables**
Copy the sample environment file to create a new `.env` file and add your database credentials:
```bash
cp backend/.env
```
Edit the `backend/.env` file with the following details:
```env
DB_PORT=5432
DB_HOST="db host url"
DB_PORT="dbport"
DB_USER="dbUsername"
DB_PASSWORD="password"
DB_DATABASE="your database"
DB_SSL='true'
```

5. **Run the Application**

Start the backend server:
```bash
cd backend
node server.js
```

Start the frontend development server:
```bash
cd ../frontend
npm run dev
```

## Future Enhancements
- Integration of payment gateway for seamless transactions.
- Enhanced user authentication with role-based access.
- Improved performance for hosted versions by migrating to paid servers.

## Contributing
We welcome contributions to enhance the project! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---
Thank you for checking out the **Canteen-Ordering-System**! Feel free to explore, contribute, and give feedback to make this platform even better.
```

![Postman](<postman images/postman1.png>)
![Postman](<postman images/postman2.png>)
![Postman](<postman images/postman3.png>)
