const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/get/users', userController.getUsers);
router.post('/add/users', userController.addUser);
router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);
router.get('/users/:id', userController.getUserById);
router.route('/')
  .get(userController.getUsers)
  .post(userController.addUser);
router.get('/:id', userController.getUserById);

const validate = (schema)=>{
  const {error} = schema.validate(req.body);
  if(error){
    res.status(400).json({error:error.details[0].message});
  }else{
    next();
  }
}
router.post("/createUser",validate(schemaValidation),(req,res)=>{
  res.json({
    message:"User created successfully",
    data:req.body
  })
});

module.exports = router;
