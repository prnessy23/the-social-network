const router = require('express').Router();

const {
    getAllUser,
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
.get(getAllUser)
.post(createUser);
console.log(route)
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

