const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.post('login', userController.loginUser)
router.post('/user/logout', userController.logoutUser) //create this in controllers
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)
router.get('/users', userController.listUsers) // create this in controllers


module.exports = router