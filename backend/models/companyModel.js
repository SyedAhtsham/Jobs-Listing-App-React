const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const AutoIncrement = require('mongoose-sequence')(mongoose);


// Define the Company Schema
const companySchema = new mongoose.Schema({
    _id: {
        type: Number, // Assuming auto-increment is being used
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        maxlength: [400, 'Desccription cannot exceed 400 characters']
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
        maxlength: [400, 'Address cannot exceed 400 characters']
    },
    contactEmail: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        maxlength: [255, 'Email cannot exceed 255 characters'],
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },

    contactPhone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        maxlength: [20, 'Phone number cannot exceed 20 characters']
        // match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number']
    },
    password: {
        type: String,
        trim: true,
        maxlength: [255, 'Password cannot exceed 255 characters'], // Only if using password-based authentication
        minlength: [8, 'Password must have minimum 8 characters'] // Only if using password-based authentication
    },
    role: {
        type: String,
        default: "Company",
    }
}, { timestamps: true }); // created and updated date will be created using this timestamps TRUE

companySchema.plugin(AutoIncrement, { id: 'com_seq', inc_field: '_id' });


// Encrypting the password before we save it
companySchema.pre('save', async function (next) {
    if (!this.isModified('password')) { 
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);

})



// compare password
companySchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// return a JWT Token
companySchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    })
}



// Create the Company model
const Company = mongoose.model('Company', companySchema);


module.exports = Company;
