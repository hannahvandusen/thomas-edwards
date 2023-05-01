import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecentNews.css";

function RecentNews() {
    const [newsletters, setNewsletters] = useState([]);

    useEffect(() => {
        axios
            .get("/api/newsletters")
            .then((response) => {
                setNewsletters(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="recent-news">
            <h3 className="section-title">Previous Issues</h3>
            <div className="row">
                {newsletters.slice(0, 3).map((newsletter) => (
                    <div className="col-md-4 mb-4" key={newsletter.id}>
                        <div className="card newsletter-card">
                            <div className="card-img-top">
                                <img
                                    src={newsletter.image}
                                    alt={newsletter.title}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {newsletter.title}
                                </h5>
                                <p className="card-text">{newsletter.date}</p>
                                <a
                                    href={newsletter.link}
                                    className="btn btn-primary newsletter-btn"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentNews;
