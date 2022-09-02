import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { dataServices } from '@/_services/Datamanager';

const User = () => {
    let navigate = useNavigate()

    useEffect(() => {
        dataServices.getAllUsers()
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }, [])

    const us = (userId) => {
        console.log('click')
        navigate('../edit/' + userId)
    }

    return (
        <div className='user'>
            User liste
            <button onClick={() => us(112)}> user 112</button>
        </div>
    );
};

export default User;