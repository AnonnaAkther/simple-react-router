import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone, email, website, address } = props.friend;
    const history = useHistory();
    const friendStyle={
        border: '3px solid blue',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'lightskyblue'
    };
    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name} {id}</h2>
            <h5>Call me: {phone}</h5>
            <h4>It's my email: {email}</h4>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to ={`/friend/${id}`}>Visit Me</Link>
            <br />
            <Link>
            <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;