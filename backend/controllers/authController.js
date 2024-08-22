const Company = require('../models/companyModel');
const ErrorResponse = require('../utils/errorResponse');




exports.signup = async (req, res, next) => {
    console.log(req.body);
    const { contactEmail } = req.body;
    const companyExist = await Company.findOne({ contactEmail });
    if (companyExist) {
        return next(new ErrorResponse("E-mail already registered", 400));
    }
    try {
        const company = await Company.create(req.body);
        res.status(201).json({
            success: true,
            company
        })
    }
    catch (error) {
        next(error);
    }
}


exports.signin = async (req, res, next) => {


    try {
        const { contactEmail, password } = req.body;

        if (!contactEmail) {
            return next(new ErrorResponse("Please enter an email", 403));
        }
        if (!password) {
            return next(new ErrorResponse("Please enter a password", 403));
        }

        // check company email
        const company = await Company.findOne({ contactEmail });

        if (!company) {
            return next(new ErrorResponse("Invalid credentials", 400));
        }

        // check password
        const isMatched = await company.comparePassword(password);

        if (!isMatched) {
            return next(new ErrorResponse("Invalid credentials", 400));
        }

        sendTokenResponse(company, 200, res);
    }
    catch (error) {
        next(error);
    }
}


const sendTokenResponse = async (user, statusCode, res) => {
    const token = await user.getJwtToken();
    res.status(statusCode)
        .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .json({ sucess: true, token, user });

}


// log out
exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}