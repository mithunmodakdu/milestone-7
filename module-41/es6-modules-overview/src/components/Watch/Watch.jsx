import React from 'react';

const Watch = ({watch}) => {
    const {name, price} = watch;
    console.log(watch)

    return (
        <div>
            <h2>Watch: {name}</h2>
            <p>Price: {price}</p>
            
        </div>
    );
};

export default Watch;