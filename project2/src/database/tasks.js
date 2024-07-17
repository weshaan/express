const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    todo: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    priority: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    status: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    dueDate: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
})


module.exports = mongoose.model('tasks',userSchema);