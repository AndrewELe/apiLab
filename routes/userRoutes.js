const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.post('login', userController.loginUser)
router.post('/user/logout', userContrroller.logoutUser) //create this in controllers
router.put('/:id', userController.updatetUser)
router.delete('/:id', userController.auth, userController.deleteUser)
router.get('/users', userController.listUsers) // create this in controllers


module.exports = router