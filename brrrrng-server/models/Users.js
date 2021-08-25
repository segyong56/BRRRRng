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
        trim: true, // => ju o@aaa.aaa => juo@aaa.aaa 스페이스를 제거해줌
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

const User = mongoose.model('User', userSchema); //스키마를 모델로 감싸줌 (이름, 스키마)

module.exports = { User };