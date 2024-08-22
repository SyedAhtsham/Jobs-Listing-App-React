const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser")
const errorHandler = require("./middleware/error");
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');


//Customer errros in Middleware
app.use(errorHandler);


//ROUTES
// app.get('/', (req, res) => {
//     res.send("Hello from Nodejs");
// })


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));

app.use(cookieParser());
app.use(cors());


//Routes Middleware
app.use('/api', authRoutes);
app.use('/api', jobRoutes);


// DATABASE connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });


//port
const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});