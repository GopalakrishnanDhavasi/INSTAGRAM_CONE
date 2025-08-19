import React, { useEffect, useState } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/posts")
            .then((data) => data.json())
            .then((data => setPosts(data)))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='d-flex justify-content-center'>
            {posts.length > 0 ? (
                <div>
                    {posts.map((post) => (
                        <div className="my-3"key={post.id}>
                            <div className='d-flex'>
                                <img  className="dp rounded-circle"src={post.user.profile_pic} alt={post.user.username}  />
                                <h5>{post.user.username}</h5>
                            </div>
                            <img className ="image" src={post.image} alt="post" />
                            <div>
                                <i class="bi bi-heart"></i>
                                <i class="bi bi-chat"></i>
                                <i class="bi bi-send"></i>
                            </div>
                            <div>
                                <b>{post.likes} likes</b>
                            </div>
                            <div>
                                {post.caption}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {/* Typo fixed here */}
                    Loading......
                </div>
            )}
        </div>
    );
}

export default Posts;