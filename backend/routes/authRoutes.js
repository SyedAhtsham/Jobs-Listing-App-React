const express = require('express');
const router = express.Router();
const { signup, signin, logout, companyProfile, editProfile, removeProfile } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');

//auth routes
// api/signup
router.post('/signup', signup);

// api/signin
router.post('/signin', signin);

// /api/logout
router.get('/logout', logout);

// /api/company
router.get('/profile', isAuthenticated, companyProfile);

// edit Profile
router.put('/edit-profile', isAuthenticated, editProfile);

// remvoe Profile
router.delete('/remove-profile', isAuthenticated, removeProfile);




module.exports = router;


// authentication and authorization difference
