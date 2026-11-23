
const express = require('express');
const app = express();

app.use(express.json());

// Temporary users data (no database)
let users = [
    { id: 1, name: 'Farhan', age: 25, role: 'Developer' },
    { id: 2, name: 'Ali', age: 24, role: 'Designer' },
    { id: 3, name: 'Ahmed', age: 26, role: 'Engineer' }
];

// ==================================
// GET ENDPOINTS
// ==================================

// 1. Get all users
app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

// 2. Get a specific user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
});

// 3. Get users by role
app.get('/api/users/role/:role', (req, res) => {
    const role = req.params.role;

    const filteredUsers = users.filter(
        u => u.role.toLowerCase() === role.toLowerCase()
    );

    res.status(200).json(filteredUsers);
});

// ==================================
// POST ENDPOINT
// ==================================

// 4. Create a new user
app.post('/api/users', (req, res) => {
    const { name, age, role } = req.body;

    if (!name || !age || !role) {
        return res.status(400).json({
            message: 'Name, age and role are required'
        });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: name,
        age: age,
        role: role
    };

    users.push(newUser);

    res.status(201).json({
        message: 'User created successfully',
        user: newUser
    });
});

// ==================================
// PUT ENDPOINT
// ==================================

// 5. Update an entire user
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { name, age, role } = req.body;

    users[userIndex] = {
        id: userId,
        name,
        age,
        role
    };

    res.status(200).json({
        message: 'User updated successfully',
        user: users[userIndex]
    });
});

// ==================================
// PATCH ENDPOINT
// ==================================

// 6. Update specific user fields
app.patch('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    Object.assign(user, req.body);

    res.status(200).json({
        message: 'User partially updated',
        user
    });
});

// ==================================
// DELETE ENDPOINT
// ==================================

// 7. Delete a user
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const userExists = users.some(u => u.id === userId);

    if (!userExists) {
        return res.status(404).json({ message: 'User not found' });
    }

    users = users.filter(u => u.id !== userId);

    res.status(200).json({
        message: 'User deleted successfully'
    });
});

// ==================================
// SERVER
// ==================================

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
