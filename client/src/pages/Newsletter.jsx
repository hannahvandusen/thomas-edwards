import React from "react";
import SubscribeForm from "../components/newsletter/SubscribeForm";
import RecentNews from "../components/newsletter/RecentNews";
import Footer from "../components/footer/Footer";

function Newsletter() {
    return (
        <div>
            <SubscribeForm />
            <RecentNews />
        </div>
    );
}

export default Newsletter;
