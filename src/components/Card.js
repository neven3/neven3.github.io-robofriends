import React from 'react';

const Card = ({ name, email, id, username }) => {
    return (
        <div className='card tc bg-light-green dib pa3 ma2 grow bw2 shadow-5 br4'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
            <div className="description">
                <h2>{name}</h2>
                <p><i>{username}</i></p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;