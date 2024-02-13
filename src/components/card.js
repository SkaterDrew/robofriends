import React from 'react';

const Card = ({ name, email, id }) => {         // destructuring right inside brackets
    //const { name, email, id } = props;      // destructuring (ES6) : allows to avoid using 'props.name', and use only 'name'
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;