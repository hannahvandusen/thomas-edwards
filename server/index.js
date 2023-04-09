require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors'); 
const mongoose = require("mongoose");
const DBURL = process.env.DBURL;

//* controllers
const adminController = require('./controllers/admin.controller');
const testimonialsController = require('./controllers/testimonials.controller');

mongoose.connect(`${DBURL}`);
const db = mongoose.connection;
mongoose.set("strictQuery", true);
db.once("open", () => console.log(`Connected: ${DBURL}`)); 
app.use(express.json());

app.use(cors());

//* pages
app.use('/admin', adminController); 
app.use('./testimonials', testimonialsController);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));