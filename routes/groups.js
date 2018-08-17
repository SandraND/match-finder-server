const express = require('express');
const router = express.Router();

const Group = require('../models/group');

// GET /groups/my-groups
// PUT /groups/accept
// PUT /groups/reject
// GET /groups

router.post('/', (req, res, next) => {

    const owner = req.session.currentUser._id;
    const groupname = req.body.groupname;
    const numplayers = req.body.numplayers;
    const numpoints = req.body.numpoints;
    const gametype = req.body.gametype;
    const city = req.body.city;
    const address = req.body.address;
    const date = req.body.date;
    const description = req.body.description;
    const game = req.body.game;

    if(!groupname) {
        return res.status(422).json({code: 'validation'});
    }

    Group.findOne({ groupname }, 'groupname')
        .then((groupExists) => {
            if(groupExists) {
                return res.status(422).json({code: 'groupname-not-unique'});
            } 
            const newGroup = Group({
                owner,
                groupname,
                numplayers,
                numpoints,
                gametype,
                city,
                address,
                date,
                description,
                game
            });

            return newGroup.save()
                .then(() => {
                    res.json(newGroup);
                })
        })
        .catch(next);
});

router.get('/games', (req, res, next) => {
    Group.find() 
    .then((game) => {
        if(!game){
            return res.status(404).json({code: 'not-found'});
        } else {
            req.session.game = game;
            return res.json(game);
        }
    })
    .catch(next)
});

router.get('/search', (req, res, next) => {
    const groupname = req.query.q;

    Group.findOne({ groupname })
    .then((group) => {
        if(!group) {
            return res.status(404).json({code: 'not-found'});
        }
        return res.json(group);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {

    const id = req.params.id;

    Group.findOne({ _id: id })
    .then((group) => {
        if(!group) {
            return res.status(404).json({code: 'not-found'});
        } else {
            req.session.group = group;
            return res.json(group);
        }
    })
    .catch(next);
});


module.exports = router;