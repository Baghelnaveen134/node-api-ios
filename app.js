const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://temp:temp@cluster0.qq0lgrt.mongodb.net', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/todos', todoRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

