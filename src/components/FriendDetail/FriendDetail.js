import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  // const params = useParams();
  // using destructuring
  const {friendId} = useParams();

  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))
  },[])
  return (
    <div>
      <h2>This is detail of my friends {friendId}</h2>
      <h3>Name: {friend.name}</h3>
      <h4>Email: {friend.email}</h4>
      <h4>website: {friend.website}</h4>
      <p><small>city: {friend.address?.city}</small></p>
      <h4>phone: {friend.phone}</h4>
      <h3>Company Name: {friend.company?.name}</h3>
      <h4>Street: {friend.address?.street}</h4>
    </div>
  );
};

export default FriendDetail;