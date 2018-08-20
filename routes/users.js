const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res, next) => {
    const username = req.query.q;
    console.log(username);
    User.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ code: 'not-found' });
            }
            return res.json(user);
        })
        .catch(next);
});

module.exports = router;