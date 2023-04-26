const router = require("express").Router();
const { Testimonials } = require('../models'); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateSession = require("../middleware/validate-session");
const cloudinary = require("cloudinary");
const upload = require('../utils/multer');

router.post('/', async (req, res) => {

    try {

        const { caption, name, association, quote, photo } = req.body;
        // if (!caption) throw new Error(
        //     "Please enter a first name."
        // )
        // if (!name) throw new Error(
        //     "Please enter a last name."
        // )
        // if (!association) throw new Error(
        //     "Please enter an association."
        // )
        // if (!quote) throw new Error(
        //     "Please enter a quote."
        // )

        const testimonials = new Testimonials({
            caption: caption,
            name: name,
            association: association,
            quote: quote,
            photo: photo
        }); 

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

router.get('/:id', async (req, res ) => {
    try {
        const { id } = req.params;
        const testimonial = await Testimonials.findOne({_id: id });
        testimonial ?
        res.status(200).json({
            testimonial
        }) :
        res.status(404).json({
            message: `testimonial not found`
        })

    } catch (err) {
        res.status(500).json({
            Error: err.message
        })

    }
})


router.patch('/:id', async (req, res) => {
    try {

        const filter = { _id: req.params.id }; 

        const info = req.body; 

        const returnOption = { new: true };

        const updated = await Testimonials.findOneAndUpdate(filter, info, returnOption);

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

router.delete('/:id', async (req, res) => {
    try {


        const { id } = req.params;

        const deleteTestimonial = await Testimonials.deleteOne({ _id: id });

        deleteTestimonial.deletedCount > 0 ?
            res.status(200).json({
                message: 'Testimonial Removed'
            })  :
            res.status(404).json({
                message: 'Did not delete testimonial'
            });

    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});


module.exports = router;