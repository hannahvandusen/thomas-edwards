import React, { useState } from "react";

function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/newsletter/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (response.ok) {
                    setSubscribed(true);
                } else {
                    console.log("Failed to subscribe");
                }
            })
            .catch((error) => {
                console.log("Error subscribing:", error);
            });
    }

    return (
        <div>
            {subscribed ? (
                <p>Thank you for subscribing!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email-input">Email address:</label>
                    <input
                        type="email"
                        id="email-input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button type="submit">Subscribe</button>
                </form>
            )}
        </div>
    );
}

export default SubscribeForm;
