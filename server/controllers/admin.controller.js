const router = require("express").Router();
const { Admin } = require('../models'); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateSession = require("../middleware/validate-session");

router.post("/signup", async (req, res) => {

    try {
        const admin = new Admin({
            firstName: req.body.first,
            lastName: req.body.last,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,)
        });

        const newAdmin = await admin.save();
        const token = jwt.sign({ id: newAdmin._id}, process.env.JWT, {
            expiresIn: "1 year"
        });

        newAdmin ? res.status(200).json({
            newAdmin,
            message: "Success! Admin account created",
            token
        }) : 
        res.status(404).json({
            message: 'incomplete'
        });
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
}); 

router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email: email });

        if(!admin) throw new Error("Email or password does not match our records");

        const passwordCheck = await bcrypt.compare(password, admin.password);
        if (!passwordCheck) throw new Error("Email or password does not match our records");

        const token = jwt.sign({ id: admin._id}, process.env.JWT, {
            expiresIn: "1 year"
        });

        email ?
        res.status(200).json({
            admin,
            token
        }) :
        res.status(404).json({
            message: "Something went wrong"
        })

    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
})

router.patch("/account", async(req, res) => {
    try {
        const email = req.body.email; 
        const password = bcrypt.hashSync(req.body.password); 

        const info = { email, password }
        const { id } = "642decae7fa4601cc079f41c"; 

        const returnOption = { new: true };

        const updated = await Admin.findOneAndUpdate( id, info , returnOption)

        updated ? 
            res.status(200).json({
                updated
            }) :
            res.status(404).json({
                message: `Cannot update account info`
            });
        } catch(err) {
            res.status(500).json({
                Error: err.message
            })
        }
}); 

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findOne({ _id: id }); 

        admin ?
        res.status(200).json({
            admin
        }) :
        res.status(404).json({
            message: `Admin not found`
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })

    }
})

module.exports = router;