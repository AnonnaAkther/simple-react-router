import React from 'react';

const Friend = (props) => {
    const {name, phone, email, website, address } = props.friend;
    const friendStyle={
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'lightskyblue'
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call me: {phone}</h5>
            <h4>It's my email: {email}</h4>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
        </div>
    );
};

export default Friend;