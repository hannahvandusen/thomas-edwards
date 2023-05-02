const router = require("express").Router();
const NewsletterSubscriber = require("../models/newsletterSubscriber");
const jwt = require("jsonwebtoken");

// define the route
router.post("/", async (req, res) => {
    // extract the email from the request body
    const { email, name } = req.body;

    // create a new NewsletterSubscriber object with the email address
    // const subscriber = new NewsletterSubscriber({ email, name });

    // // save the subscriber to the database
    // subscriber.save((err) => {
    //     if (err) {
    //         // handle any errors that occur while saving the subscriber
    //         console.log(err);
    //         res.status(500).json({ error: "Failed to subscribe" });
    //     } else {
    //         // send a success response to the client
    //         res.status(200).json({ message: "Successfully subscribed" });
    //     }
    // });

    try {
        const date = new Date()
        const currentDate = date.getFullYear() +"-"+(date.getMonth() + 1)+"-"+date.getDate();
    
        const subscriber = new NewsletterSubscriber({
            email: req.body.email,
            name: req.body.name,
            date: currentDate
        });
        const newSubscriber = await subscriber.save(); 
        const token = jwt.sign({ id: newSubscriber._id}, process.env.JWT, {
            expiresIn: "100 years"
        });

        newSubscriber ?
        res.status(200).json({
            newSubscriber,
            message: `Successfully Subscribed!`,
            token
        }) :
        res.status(404).json({
            Error: err.message
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});

router.get("/", async(req, res) => {
    try {
        const subscribers = await NewsletterSubscriber.find();
        res.status(200).json({
            subscribers
        })
    } catch (err) {
        res.status(500).json({
            Error: err.message
    })
}
}); 

// export the router object for use in other files
module.exports = router;
