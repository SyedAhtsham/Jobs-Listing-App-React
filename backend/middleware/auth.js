const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const Company = require("../models/companyModel");


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


// admin middleware