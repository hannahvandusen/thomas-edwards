import React, { useState } from "react";

const RecentNews = () => {
    const [newsletterIndex, setNewsletterIndex] = useState(0);
    const newsletters = [
        {
            title: "Newsletter 1",
            content: "Here is some content for newsletter 1",
            date: "March 2023",
        },
        {
            title: "Newsletter 2",
            content: "Here is some content for newsletter 2",
            date: "February 2023",
        },
        {
            title: "Newsletter 3",
            content: "Here is some content for newsletter 3",
            date: "January 2023",
        },
    ];

    const handlePrevious = () => {
        setNewsletterIndex(
            (newsletterIndex + newsletters.length - 1) % newsletters.length
        );
    };

    const handleNext = () => {
        setNewsletterIndex((newsletterIndex + 1) % newsletters.length);
    };

    return (
        <div>
            <h2>{newsletters[newsletterIndex].title}</h2>
            <p>{newsletters[newsletterIndex].content}</p>
            <p>{newsletters[newsletterIndex].date}</p>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default RecentNews;
