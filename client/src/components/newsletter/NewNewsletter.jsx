import React, { useState } from "react";

function NewNewsletter() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", image);
        // send the new post data to the server to be saved
        fetch("/newsletter", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    console.log("New newsletter created");
                    // clear the form fields
                    setTitle("");
                    setContent("");
                    setImage(null);
                } else {
                    console.log("Failed to create new newsletter");
                }
            })
            .catch((error) => {
                console.log("Error creating new newsletter:", error);
            });
    }

    return (
        <div className="new-newsletter-container py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>...</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    rows="10"
                                    value={content}
                                    onChange={handleContentChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Upload an Image</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Create Newsletter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewNewsletter;
