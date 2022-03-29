import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const {postId} = useParams();
  const [posts, setPosts] = useState({})

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts ${postId}`

    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[postId])
  return (
    <div>
      <h4>This is post details : {postId} </h4>
    </div>
  );
};

export default PostDetail;