const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction

} = require ('../../controllers/thought-controller');

// setting up the Get and Post at api/thoughts
router
.route('/')
.get(getAllThought)
.post(createThought);

// set up get, update and delete one thought by :id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// reaction post
router 
.route('/:thoughtId/reactions')
.post(createReaction);

router 
.route('/:thoughtId/reactions/reactionId')
.delete(deleteReaction);

module.exports = router;


