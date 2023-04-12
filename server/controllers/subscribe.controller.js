const express = require("express");
const router = express.Router();
const NewsletterSubscriber = require("../models/newsletterSubscriber");

// define the route
router.post("/subscribe", (req, res) => {
    // extract the email from the request body
    const { email } = req.body;

    // create a new NewsletterSubscriber object with the email address
    const subscriber = new NewsletterSubscriber({ email });

    // save the subscriber to the database
    subscriber.save((err) => {
        if (err) {
            // handle any errors that occur while saving the subscriber
            console.log(err);
            res.status(500).json({ error: "Failed to subscribe" });
        } else {
            // send a success response to the client
            res.status(200).json({ message: "Successfully subscribed" });
        }
    });
});

// export the router object for use in other files
module.exports = router;
