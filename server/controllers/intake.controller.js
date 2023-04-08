const router = require("express").Router();
const { Intake } = require('../models');

router.post("/", async(req, res) => {
    try {

        // const { name, email, phone, contactTime, contactMethod, message } = req.body;

        // const intake = new Intake({
        //     name,
        //     email, 
        //     phone, 
        //     contactTime,
        //     contactMethod, 
        //     message
        // }); 
        const intake = new Intake({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            contactTime: req.body.time,
            contactMethod: req.body.method,
            message: req.body.message
        })

        const newIntake = await intake.save();
        
        newIntake ? 
        res.status(200).json({
            newIntake,
            message: 'Success! Your request has been sent'
        }) :
        res.status(404).json({
            message: `Request not completed`
        }); 
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});
module.exports = router;