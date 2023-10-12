const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trip: true,

    }
    ,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,

    },
    confirm_password: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        unique: true,
        required: true
    }

})


const UserModel = new mongoose.model('User', UserSchema)

module.exports = UserModel