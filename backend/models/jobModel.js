const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the job schema
const jobSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Remote', 'On-site', 'Hybrid'], // Job location type
        default: 'Remote'
    },
    workSchedule: {
        type: String,
        required: true,
        enum: ['Full-time', 'Part-time', 'Flexible'], // Work schedule type
        default: 'Full-time'
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
        required: true,
        enum: [
            'Under $50K',
            '$50K - $60K',
            '$60K - $70K',
            '$70K - $80K',
            '$80K - $90K',
            '$90K - $100K',
            '$100K - $125K',
            '$125K - $150K',
            '$150K - $175K',
            '$175K - $200K',
            'Over $200K'
        ], // Enum for salary ranges
        default: 'Under $50K'
    },
    isOpen: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});


// Apply the auto-increment plugin to the `id` field
jobSchema.plugin(AutoIncrement, { inc_field: 'id' });


// Create the Job model using the schema
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
