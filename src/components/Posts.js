import React, { useEffect, useState } from 'react';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch('https://cloudr-api.jjlock.workers.dev/api/posts');
      const postResp = await resp.json();
      setPosts(postResp);
    }

    getPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="user-info">Posted by {post.username} | {formatDate(post.created_at)}</div>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;