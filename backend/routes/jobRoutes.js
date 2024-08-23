const express = require('express');
const router = express.Router();
const { addJob, allJobs, singleJob, editJob, removeJob, postedJobs } = require("../controllers/jobContoller");
const { isAuthenticated, isAuthorised } = require('../middleware/auth');


// add job
router.post('/add-job', isAuthenticated, addJob);

// view all jobs
router.get('/jobs', allJobs);

// view all posted jobs
router.get('/posted-jobs',isAuthenticated, postedJobs);

// view single job
router.get('/jobs/:id', singleJob);

// edit a job
router.put('/jobs/edit/:id', isAuthenticated, isAuthorised, editJob);

// remove a job
router.delete('/jobs/remove-job/:id', isAuthenticated, isAuthorised, removeJob);



module.exports = router;