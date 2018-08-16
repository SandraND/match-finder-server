const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;


const groupSchema = new Schema({
    owner: {
        type: ObjectID, 
        ref: 'User'
    },
    groupname: {
        type: String,
        required: true,
        unique: true
    },
    numplayers: {
        type: Number,
        required: true
    },
    numpoints: {
        type: Number
    },
    gametype: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    game: {
        type: String,
        enum: ['Warhammer40k', 'Magic', 'X-Wing'],
        required: true
    },
//     players: [{
//         type: mongoose.Schema.Types.ObjectID, ref: 'User' , 
//     }]
// }, {
    // timestamps: true
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;