const router = require("express").Router();
const { About } = require('../models/index')

router.post("/", async(req, res) => {
    try {
        const about = new About({
            about: req.body.about,
            story: req.body.story, 
            mission: req.body.mission,
            value: req.body.value
        }); 
        
        const newAbout = await about.save();
        
        newAbout ? 
        res.status(200).json({
            newAbout,
            message: `Your about section has been created!`
        }) :
        res.status(404).json({
            message: `About section not created`
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
}); 

router.get("/", async(req, res) => {
    try {
        const aboutSection = await About.find();
        res.status(200).json({
            aboutSection
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
}); 

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const about = await About.findOne({ _id: id});
        
        about ? 
        res.status(200).json({
            about
        }) :
        res.status(404).json({
            message: `section not found`
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })

    }
}); 

router.patch("/edit", async(req, res) => {
    try {
        const about = req.body.about;
        const story = req.body.story;
        const mission = req.body.mission;
        const value = req.body.value; 

        const { id } = "643ae5920f74ad63f71a205d"; 

        const aboutSection = { about, story, mission, value};

        const returnOption = { new: true }; 

        const updated = await About.findOneAndUpdate( id, aboutSection, returnOption ); 

        updated ? 
            res.status(200).json({
                updated
            }) : 
            res.status(404).json({
                message: `About section not updated`
            }); 
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
})

module.exports = router;