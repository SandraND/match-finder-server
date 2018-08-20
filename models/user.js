const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: [{
        type: ObjectID, 
        ref: 'User'
    }]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;