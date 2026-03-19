const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.get('/get/users', userController.getUsers);
router.post('/add/users', userController.addUser);

router.route("/users")
  .get(userController.getUsers)
  .post(userController.addUser);

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

module.exports = router;