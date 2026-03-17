// const express = require('express')
// const routes = express.Router()

// const userController = require("../controller/userController")
// routes.get('/users',userController.getusers)

// module.exports=routes;
const express = require('express')
const routes = express.Router()

const userController = require('../controller/userController')

routes.get('/users', userController.getUsers);
routes.get('/users/:id',userController.getUserById);


module.exports = routes