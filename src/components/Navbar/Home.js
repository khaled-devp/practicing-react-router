import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Home = () => {
    const home = useLoaderData();
    return (
        <div>
            <h1>This is default Page</h1>
            {home.map(friend => <Friend key={friend.id} friend={friend}></Friend>)}
        </div>
    );
};

export default Home;