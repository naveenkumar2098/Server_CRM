require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Database
const db = require('./config/database');

//Database Connection
db.authenticate()
    .then(() => console.log('Database Connected....'))
    .catch(err => console.log(err));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//PORT
const port = process.env.PORT || 8050;

//Starting server
app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
})