const express = require('express');
const router = express.Router();
const { addJob, allJobs, singleJob } = require("../controllers/jobContoller");
const { isAuthenticated, isEmployer } = require('../middleware/auth');


// add job
router.post('/add-job', isAuthenticated, isEmployer, addJob);

// all jobs
router.get('/jobs', allJobs);

// single job
router.get('/jobs/:id', singleJob);


module.exports = router;