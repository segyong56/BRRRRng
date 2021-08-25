import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        maxlength: 50,
        required: true
    },
    userid: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 5
    },
    carid: [{
        type: String
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };