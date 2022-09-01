import React from 'react';

const User = () => {

    const us = () =>{
        console.log('click')
    }

    return (
        <div className='user'>
            User liste
            <button onClick={us}>User 112</button>
        </div>
    );
};

export default User;