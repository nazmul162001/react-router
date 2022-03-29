import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`

    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h2>Every post Facebook ever had {posts.length} </h2>

        {
          posts.map(post => <Link
          key = {post.id}
          to={`/posts/${post.id}`}
          >{post.id}</Link>)
        }

        <Outlet></Outlet>
       
    </div>
  );
};

export default Post;