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

        const date = new Date()
        const currentDate = date.getFullYear() +"-"+(date.getMonth() + 1)+"-"+date.getDate();
    
        const intake = new Intake({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            contactTime: req.body.time,
            contactMethod: req.body.method,
            message: req.body.message,
            date: currentDate
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

router.get("/", async(req, res) => {
    try {
        const intakeForms = await Intake.find();
        res.status(200).json({
            intakeForms
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
    })
}
}); 

router.delete("/:id", async(req, res) => {

    try {
        const { id } = req.params;

        const deleteMessage = await Intake.deleteOne({ _id: id });
        deleteMessage.deletedCount > 0 ?
        res.status(200).json({
            message: `Message deleted`
        }) :
        res.status(404).json({
            message: 'Did not delete testimonial'
        });
    
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
})

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;

        const intake = await Intake.findOne({_id: id});

        intake ?
        res.status(200).json({
            intake
        }) :
        res.status(404).json({
            message: `Form not found`
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
    })
    }
})

module.exports = router;