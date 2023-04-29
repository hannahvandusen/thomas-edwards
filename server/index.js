require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const DBURL = process.env.DBURL;

//* controllers

const adminController = require("./controllers/admin.controller");
const testimonialsController = require("./controllers/testimonials.controller");
const intakeController = require("./controllers/intake.controller");
const aboutController = require('./controllers/about.controller');
const subscribeController = require('./controllers/subscribe.controller');

mongoose.connect(`${DBURL}`);
const db = mongoose.connection;
mongoose.set("strictQuery", false);
db.once("open", () => console.log(`Connected: ${DBURL}`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next();
});

app.use(cors());

//* pages
app.use("/admin", adminController);
app.use("/intake", intakeController);
app.use("/testimonialsindex", testimonialsController);
app.use("/about", aboutController); 
app.use("/subscribe", subscribeController); 

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
