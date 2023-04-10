require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors'); 
const mongoose = require("mongoose");
const DBURL = process.env.DBURL;

//* controllers
const adminController = require('./controllers/admin.controller');
<<<<<<< HEAD
const testimonialsController = require('./controllers/testimonials.controller');
=======
const intakeController = require('./controllers/intake.controller');
>>>>>>> 4f46348b818fdd91d88bd6465ec3a94f19ff0668

mongoose.connect(`${DBURL}`);
const db = mongoose.connection;
mongoose.set("strictQuery", true);
db.once("open", () => console.log(`Connected: ${DBURL}`)); 
app.use(express.json());

app.use(cors());

//* pages
app.use('/admin', adminController); 
<<<<<<< HEAD
app.use('./testimonials', testimonialsController);
=======
app.use('/intake', intakeController); 
>>>>>>> 4f46348b818fdd91d88bd6465ec3a94f19ff0668

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));