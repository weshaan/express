const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    time: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
})


module.exports = mongoose.model('users',userSchema);