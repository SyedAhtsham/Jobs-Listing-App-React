const Job = require('../models/jobModel');
const ErrorResponse = require('../utils/errorResponse');



// employer adds a job
exports.addJob = async (req, res, next) => {

    if (!req.body) {
        return next(new ErrorResponse("Please add job details", 400));
    }
    try {
        const job = await Job.create(req.body);
        res.status(201).json({
            success: true,
            job
        })
    }
    catch (error) {
        next(error);
    }
}


// load all jobs
exports.allJobs = async (req, res, next) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find().estimatedDocumentCount();
    try {
        const jobs = await Job.find().sort({ createdAt: -1 }).select('-password')
            .skip(pageSize * (page - 1))
            .limit(pageSize);
        

        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count
        })

        next();
    }
    catch (error) {
        return next(error);
    }
}


// get single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
        next();
    } catch (error) {
        return next(error);        
    }
}