const express = require('express')

const {
    register,
    login,
    logout,
    getMe,
    forgotPassword,
    verifyResetCode,
    resetPassword,
    updateDetails,
    updatePassword,
    
} = require('../controllers/auth')

const router = express.Router()

const {protect} = require('../middleware/auth')

router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/me',protect,getMe)
router.put('/updatedetails',protect,updateDetails)
router.put('/updatepassword',protect,updatePassword)
router.post('/forgotpassword',forgotPassword)
router.post('/verifyresetcode',verifyResetCode)
router.put('/resetpassword',resetPassword)

module.exports = router