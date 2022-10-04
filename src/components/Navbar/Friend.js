import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p><small>User name: <Link to={`${friend.id}`}>{friend.username}</Link></small></p>
        </div>
    );
};

export default Friend;