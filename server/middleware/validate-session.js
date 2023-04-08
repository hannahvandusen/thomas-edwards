const jwt = require("jsonwebtoken");
const { findById } = require("../models/admin.model");
const { Admin } = require("../models");
// this gives us tokens and a validate session function that we can use in our controllers.
const validateSession = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token); //returns undefined

    const decoded = await jwt.verify(token, process.env.JWT);

    console.log(decoded);

    const admin = await Admin.findById(decoded.id);
    if (!admin) throw new Error("Admin account not found!"); // gives us an error if a user is not found

    req.admin = admin;

    return next();
  } catch (err) {
    res.json({ message: err.message }); // throws an error message
  }
};

module.exports = validateSession;