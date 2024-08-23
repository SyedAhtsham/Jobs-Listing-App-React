const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const Company = require("../models/companyModel");
const Job = require("../models/jobModel");


// check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorResponse("Not authorised to access this route", 401));
    }
    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.company = await Company.findById(decoded.id);
        next();
    }
    catch (error) {
        return next(new ErrorResponse("Not authorised to access this route", 401))
    }
}


// company middleware
exports.isAuthorised = async (req, res, next) => {
    try {
        
        const job = await Job.findById(req.params.id);
        const companyId = req.company._id;

        if (!job) {
            return next(new ErrorResponse("Job not found", 404))
        }

        if (req.company.role !== "Company" || job.companyId.toString() !== companyId.toString()) {
            return next(new ErrorResponse("Access denied, you cannot edit or remove this job", 401));
        }

        next();
    } catch (error) {
        next(error);
    }
}


