const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    isComplete: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema, "mytodo");

module.exports = Todo;
