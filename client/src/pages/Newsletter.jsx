import React from "react";
import RecentNews from "../components/newsletter/RecentNews";
import SubscribeForm from "../components/newsletter/SubscribeForm";
import "./Newsletter.css";

function Newsletter() {
    return (
        <div>
            <SubscribeForm />
            <RecentNews />
            <Footer />
        </div>
    );
}

export default Newsletter;
