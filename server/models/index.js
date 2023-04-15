const Admin = require('./admin.model');
const Intake = require('./intake.model');
const Testimonials = require('./testimonials.model');
const Subscriber = require('./newsletterSubscriber'); 
const Newsletter = require('./newsletter.model');
const About = require('./about.model');

module.exports = {
    Admin: Admin,
    Intake: Intake,
    Testimonials: Testimonials,
    Subscriber: Subscriber,
    Newsletter: Newsletter,
    About: About
};