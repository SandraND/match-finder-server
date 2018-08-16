const express = require('express');
const router = express.Router();

const Group = require('../models/group');

// GET / groups/my-groups
// PUT /groups/accept
// PUT /groups/reject
// GET /groups
// GET /groups/:id
// GET /games

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

// router.get('/', (req, res, next) => {
//     if(groupname) {
//         res.json(Group);
//     }
// });

router.get('/games', (req, res, next) => {
    // const game = req.body.game;

    Group.find() 
    .then((game) => {
        if(!game){
            return res.status(404).json({code: 'not-found'});
        } else {
            req.session.game = game;
            return res.json(game);
        }
    })
});




module.exports = router;