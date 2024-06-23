# worko-backend-login-page

# Worko Backend API

This project is a backend API for Worko, a platform to help job seekers request referrals and access various career services. The API is built using Node.js and Express, following an MVC architecture.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

## Requirements

- Node.js (version 14.x or later)
- npm (version 6.x or later)
- MongoDB (version 4.x or later)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/worko-backend.git
    cd worko-backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of the project and add your MongoDB connection string and other environment variables:
    ```env
    DB_URI=mongodb://localhost:27017/worko
    PORT=3000
    ```

## Running the Project

1. Start the server:
    ```bash
    npm start
    ```
   or with `nodemon` for development:
    ```bash
    nodemon src/app.js
    ```

2. The server will start on the port specified in your `.env` file (default is `3000`). You can access the API at `http://localhost:3000`.

## API Endpoints

### User Routes

- **GET /worko/user**
    - Description: Get a list of all users.
    - Response: JSON array of users.

- **GET /worko/user/:userId**
    - Description: Get details of a specific user by ID.
    - Response: JSON object of the user.

- **POST /worko/user**
    - Description: Create a new user.
    - Request Body:
        ```json
        {
          "email": "test@example.com",
          "name": "Test User",
          "age": 25,
          "city": "Test City",
          "zipCode": "12345"
        }
        ```
    - Response: JSON object of the created user.

- **PUT /worko/user/:userId**
    - Description: Update an existing user by ID.
    - Request Body: Same as the POST request.
    - Response: JSON object of the updated user.

- **PATCH /worko/user/:userId**
    - Description: Partially update an existing user by ID.
    - Request Body: Any subset of the user fields.
    - Response: JSON object of the updated user.

- **DELETE /worko/user/:userId**
    - Description: Soft delete a user by ID.
    - Response: Success message.

## Testing

To run the unit tests, use the following command:
```bash
npm test
