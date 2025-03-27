import React, { useState } from "react";
import axios from "axios";

const PostPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [slug, setSlug] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const [publishedate, setPublishedate] = useState("");
    const [author, setAuthor] = useState("");
    const [categories, setCategories] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("No token found. Please log in.");
            return;
        }

        


        const postData = {
            data: {
                title: title,
                Content: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: content,
                                type: "text"
                            }
                        ]
                    }
                ],
                slug: slug,
                publishedate: publishedate,
                Author: author,
                categories: [parseInt(categories)],
            }
        };




        try {
            const response = await axios.post("http://localhost:1337/api/posts",postData, 
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            console.log(" Post Created:", response.data);
            alert("Post created successfully!");
        } 
        
        catch (error) {
            console.error(" Error creating post:", error.response ? error.response.data : error);
            alert("Failed to create post.");
        }
    };




    return (
        <div className="post-container">
            <h2>Create a New Post</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </div>

                <div>
                    <label>Slug:</label>
                    <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                </div>

                <div>
                    <label>Publish Date:</label>
                    <input type="date" value={publishedate} onChange={(e) => setPublishedate(e.target.value)} required />
                </div>

                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>

                <div>
                    <label>Categories (ID):choose among 1,3,5,7,9,11</label>
                    <input type="number" value={categories} onChange={(e) => setCategories(e.target.value)} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostPage;
