const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');
// Post and Get set up /users
router 
.route('/')
.get(getAllUsers)
.post(createUser);

// Get, Post and Delete/users
router 
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router 
.route ('/:userId/friends/:friendId')
.post (addFriend)
.delete(deleteFriend);


module.exports = router;

