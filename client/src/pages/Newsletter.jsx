import React from "react";
import RecentNews from "../components/newsletter/RecentNews";
import SubscribeForm from "../components/newsletter/SubscribeForm";
import "./Newsletter.css";

function Newsletter() {
    return (
        <div className="newsletter-container py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Recent Newsletters</h2>
                        <RecentNews />
                    </div>
                    <div className="col-md-4">
                        <h2>Subscribe to our Newsletter</h2>
                        <SubscribeForm />
                    </div>
                </div>
            </div>

        <div>
            <SubscribeForm />
            <RecentNews />

        </div>
    );
};

export default Newsletter;
