# Energy Management System (SHEMS)

## Overview
This project implements an energy management system using React for the frontend, Node.js for the backend, and JWT for authentication. The system allows users to monitor and manage energy consumption, providing an efficient and user-friendly interface.

## Project Structure

The project is divided into two main folders:

- **SHEMS** (Frontend): This folder contains the React-based frontend of the application.
- **Backend**: This folder contains the Node.js-based backend of the application, which handles API requests, JWT authentication, and database interactions.

## Prerequisites

Before running this project, ensure you have the following installed:
- **Node.js**: To run both frontend and backend servers.
- **PostgreSQL**: To manage the database.
- **npm**: To install the necessary packages.

## Installation
1. Clone the repository

```bash
git clone repository_link
cd repository-name
```

2. Install Frontend Dependencies
Navigate to the SHEMS folder and install the dependencies:
```bash
cd SHEMS
npm install
```
3. Install Backend Dependencies
Navigate to the backend folder and install the dependencies:
```bash
cd backend
npm install
```
4. Configure the Database
To connect to the PostgreSQL database, update the `db.js` file in the backend folder with your database credentials:
```bash
const pool = new Pool({
    user: 'your-username',
    host: 'localhost',
    database: 'SHEMS-database',
    password: 'your-password',
    port: 5432,
});
```
Replace `your-username`, `your-password`, and any other details with your actual PostgreSQL credentials.

## Running the Application
1. Start the Backend Server
In the backend folder, run the following command to start the Node.js server:
```bash
cd backend
npm run dev
```
2. Start the Frontend Server
In the SHEMS folder, run the following command to start the React development server:
```bash
cd SHEMS
npm run dev
```
3. Access the Application
Once both servers are running, you can access the application by navigating to the URL provided by the React development server, typically `http://localhost:3000`.


## License
This project is licensed under the MIT License.


