const Job = require('../models/jobModel');
const ErrorResponse = require('../utils/errorResponse');
const Company = require('../models/companyModel');



// employer adds a job

exports.addJob = async (req, res, next) => {
    try {
        // Use the company ID from the logged-in user
        const companyId = req.company._id;

        // Create and save the job with the company ID
        const job = await Job.create({
            ...req.body,
            companyId // Automatically associate the job with the logged-in company
        });

        res.status(201).json({
            success: true,
            data: job
        });
    } catch (error) {
        next(error);
    }
};



// load all jobs
exports.allJobs = async (req, res, next) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.countDocuments();
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

        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        res.status(200).json({
            success: true,
            job
        });
        next();
    } catch (error) {
        next(error);
    }
}



// edit a job
exports.editJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        res.status(200).json({
            success: true,
            job
        });
        next();
    } catch (error) {
        next(error);
    }
}



// remove a job
exports.removeJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);

        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        res.status(200).json({
            success: true,
            message: "Job has been removed"
        });
        next();
    } catch (error) {
        next(error);
    }
}




