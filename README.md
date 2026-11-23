# User Management REST API

A beginner-friendly RESTful API built with **Node.js** and **Express.js** to practice HTTP methods, routing, request handling, and JSON responses.

This project currently uses an in-memory JavaScript array for storing user data. No database is required.

## Features

- Retrieve all users
- Retrieve a user by ID
- Filter users by role
- Create new users
- Update complete user information
- Partially update user information
- Delete individual users
- Handle invalid requests and missing users

## Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- JSON

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/farhan1671/node-project.git
```

### 2. Navigate to the project directory

```bash
cd node-project
```

### 3. Install dependencies

```bash
npm install express
```

### 4. Start the server

```bash
node users.js
```

The server will run at:

```text
http://localhost:5000
```

## API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Retrieve all users |
| GET | `/api/users/:id` | Retrieve a user by ID |
| GET | `/api/users/role/:role` | Filter users by role |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Replace user information |
| PATCH | `/api/users/:id` | Partially update user information |
| DELETE | `/api/users/:id` | Delete a user |

## Request Examples

### 1. Get All Users

```http
GET /api/users
```

### 2. Get User by ID

```http
GET /api/users/1
```

### 3. Filter Users by Role

```http
GET /api/users/role/Developer
```

### 4. Create a New User

```http
POST /api/users
Content-Type: application/json
```

Request Body:

```json
{
  "name": "Usman",
  "age": 23,
  "role": "DevOps Engineer"
}
```

### 5. Update a User (PUT)

```http
PUT /api/users/1
Content-Type: application/json
```

Request Body:

```json
{
  "name": "Farhan Javaid",
  "age": 25,
  "role": "Data Engineer"
}
```

### 6. Partially Update a User (PATCH)

```http
PATCH /api/users/1
Content-Type: application/json
```

Request Body:

```json
{
  "role": "DevOps Engineer"
}
```

### 7. Delete a User

```http
DELETE /api/users/1
```

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | OK – Request successful |
| 201 | Created – Resource created successfully |
| 400 | Bad Request – Invalid or missing input |
| 404 | Not Found – Requested user does not exist |

## Testing

You can test the API endpoints using:

- Postman
- Thunder Client (VS Code extension)

## Important Note

This project uses an in-memory JavaScript array instead of a database.

- Data is stored temporarily in application memory.
- New users and updates are not persistent.
- All changes are lost when the server restarts.

## Learning Objectives

This project focuses on understanding:

- Express.js routing
- HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Request parameters (`req.params`)
- Request body (`req.body`)
- JSON responses (`res.json()`)
- HTTP response status codes
- Basic REST API structure

---

**Author:** Farhan Javaid

**Project:** Express.js REST API Practice