const router = require("express").Router();
const { Testimonials } = require('../models'); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateSession = require("../middleware/validate-session");
const cloudinary = require("cloudinary");
const upload = require('../utils/multer');

// const uploadImage = async (imagePath) => {
//     const option = {
//         use_filename: true,
//         unique_filename: false,
//         overwrite: true
//     }

//     try {
        
//         const result = await cloudinary.uploader.upload(imagePath, option)
//         const url = await result.secure_url;
//         console.log('RESULT: ', url)
//         return url;

//     } catch (err) {
//         console.error(err);
//     }
// }

router.post('/', async (req, res) => {

    try {

        // const cloud_url = await uploadImage(req.file.path)

        // const { caption, name, association, quote, photo } = req.body;

        const testimonials = new Testimonials({
            caption: req.body.caption,
            name: req.body.body,
            association: req.body.association,
            quote: req.body.quote,
            // photo: cloud_url ? cloud_url : ""
        }); 

        const newTestimonials = await testimonials.save();
        
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