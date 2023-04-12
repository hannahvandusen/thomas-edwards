const Newsletter = require("../models/newsletter");

exports.create = (req, res) => {
    // create a new newsletter object with the data from the request body
    const newsletter = new Newsletter({
        title: req.body.title,
        content: req.body.content,
        date: new Date(req.body.date),
    });

    // save the newsletter to the database
    newsletter.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Failed to create new newsletter" });
        } else {
            res.status(200).json({ message: "New newsletter created" });
        }
    });
};

exports.getAll = (req, res) => {
    // find all the newsletters in the database
    Newsletter.find({}, (err, newsletters) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Failed to get newsletters" });
        } else {
            res.status(200).json(newsletters);
        }
    });
};
