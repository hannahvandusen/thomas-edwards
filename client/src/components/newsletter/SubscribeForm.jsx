import "./SubscribeForm.css";
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
                <form action="#" class="row flex-fill" onSubmit={handleSubmit}>
                    <label htmlFor="email-input">
                        Subscribe to our free newsletter
                    </label>
                    <input
                        type="email"
                        className="form-control px-4 border-0 w-100 text-center text-md-left"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        id="email-input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        type="submit"
                        class="btn btn-primary btn-lg border-0 w-100"
                    >
                        Subscribe
                    </button>
                </form>
            )}
        </div>
    );
}

export default SubscribeForm;
