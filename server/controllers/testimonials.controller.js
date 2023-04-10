const router = require("express").Router();
const { Testimonials } = require('../models'); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateSession = require("../middleware/validate-session");

router.post('/', validateSession, async (req, res) => {

    try {

        const { firstName, lastName, association, quote } = req.body;
        if (!firstName) throw new Error(
            "Please enter a first name."
        )
        if (!lastName) throw new Error(
            "Please enter a last name."
        )
        if (!association) throw new Error(
            "Please enter an association."
        )
        if (!quote) throw new Error(
            "Please enter a quote."
        )

        const testimonials = new Testimonials({
            firstName: firstName,
            lastName: lastName,
            association: association,
            quote: quote
        })

        const newTestimonials = await testimonials.save();
        // const token = jwt.sign({ id: newTestimonials._id}, process.env.JWT, {
        //     expiresIn: "1 year"
        // });
        
        newTestimonials ?
            res.status(200).json({
                newTestimonials
            })  :
            res.status(404).json({
                message: "Testimonial NOT created."
            })


    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});


router.get('/', async (req, res) => {
    try {

        const testimonials = await Testimonials.find();

        testimonials ?
            res.status(200).json({
                testimonials
            })  :
            res.status(404).json({
                message: "No testimonials found"
            })

    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});


router.patch('/:id', validateSession, async (req, res) => {
    try {

        const filter = { _id: req.params.id, owner_id: req.user.id }

        const info = req.body;

        const returnOption = {new: true};

        const updated = await Testimonials.findByIdAndUpdate(filter, info, returnOption);

        updated ?
            res.status(200).json({
                updated
            })  :
            res.status(404).json({
                message: "Could not update testimonial."
            })

    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});

router.delete('/:id', validateSession, async (req, res) => {
    try {

        const filter = { _id: req.params.id, owner_id: req.user.id };

        const deleteTestimonial = await Testimonials.deleteOne(filter);

        deleteTestimonial.deletedCount > 0 ?
            res.status(200).json({
                message: 'Testimonial deleted.'
            })  :
            res.status(404).json({
                message: 'Did not delete testimonial.'
            });

    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});


module.exports = router;