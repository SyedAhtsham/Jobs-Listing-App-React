const express = require('express');
const router = express.Router();
const { signup, signin, logout, companyProfile } = require('../controllers/authController');
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


module.exports = router;


// authentication and authorization difference
