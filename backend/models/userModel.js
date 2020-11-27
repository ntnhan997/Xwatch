const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true
    },
    isAdmin :{
        type: Boolean,
        required: true,
        default: false
    }
});


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;