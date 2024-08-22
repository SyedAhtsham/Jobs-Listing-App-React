const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the job schema
const jobSchema = new mongoose.Schema({
    _id: {
        type: Number, // Change _id to Number
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Remote', 'On-site', 'Hybrid'],
        default: 'Remote'
    },
    workSchedule: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Flexible'],
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: String,
        enum: [
            'Under $50K', '$50K - $60K', '$60K - $70K', '$70K - $80K', '$80K - $90K',
            '$90K - $100K', '$100K - $125K', '$125K - $150K', '$150K - $175K', '$175K - $200K', 'Over $200K'
        ],
        required: true
    },
    isOpen: {
        type: Boolean,
        default: true
    },
    companyId: {
        type: mongoose.Schema.Types.Number, // Reference to Company schema
        ref: 'Company',
        required: true
    }
}, {
    timestamps: true // This adds the createdAt and updatedAt fields
});

// Apply the auto-increment plugin to the `_id` field
jobSchema.plugin(AutoIncrement, { id: 'job_seq', inc_field: '_id' });

// Create the Job model
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
