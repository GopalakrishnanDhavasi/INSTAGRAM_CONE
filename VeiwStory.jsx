import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ViewStory() {
    const { id, tot } = useParams();
    const [story, setStory] = useState(null);
    const storyId = Number(id);
    const totalStories = Number(tot);

    const navigate = useNavigate();

    // This useEffect implements YOUR LOGIC at the correct time.
    useEffect(() => {
        // Your logic: "If the story ID is out of bounds, navigate away."
        if (storyId > totalStories || storyId <= 0) {
            navigate('/');
        }
    }, [storyId, totalStories, navigate]);

    // This useEffect handles fetching data.
    useEffect(() => {
        fetch(`http://localhost:4000/Story/${storyId}`)
            .then((data) => data.json())
            .then((data => setStory(data)))
            .catch((err) => console.log(err));
    }, [storyId]);

    if (!story) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <Link to={`/Story/${storyId - 1}/${totalStories}`} className="h1 p-3">
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </Link>

                <img className='vh-100' src={story.image} alt={story.username || "story"} />
                
                <Link to={`/Story/${storyId + 1}/${totalStories}`} className="h1 p-3">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>
            </div>
        </div>
    );
}

export default ViewStory;