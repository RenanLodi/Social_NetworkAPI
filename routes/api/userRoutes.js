const router = require('express').Router();

const {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController');

  router.route('/').get(getUsers).post(addUser);

  router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);


module.exports = router;