import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    return (
        <div>
            <h2>Details about {friend.name}</h2>
            <p>Phone: {friend.phone}</p>
            <p><small>Website: {friend.website}</small></p>
        </div>
    );
};

export default FriendsDetails;