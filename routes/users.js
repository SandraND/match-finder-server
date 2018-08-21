const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;


const User = require('../models/user');

router.get('/', (req, res, next) => {
    const username = req.query.q;

    User.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ code: 'not-found' });
            }
            return res.json(user);
        })
        .catch(next);
});

router.post('/:params', (req, res, next) => {
    const params = req.params.params.split('&');

    User.findOne({_id: params[1]})
    .then((user) => {
        if(!user) {
            return res.status(404).json({code: 'not-found'});
        }
        user.friends.push(params[0]);
        user.save()
        .then(() => {
            console.log('Friend saved on user');
            res.status(200).json({code: 'friend-saved'});
        })
        .catch(next);
    })
    .catch(next);

});

module.exports = router;