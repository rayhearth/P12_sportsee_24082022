import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({id, name}) => {

    let navigate = useNavigate()

    const us = (id) => {
        navigate('./dashboard/' + id)
    }

    return (
        <button onClick={() => us(id)}>Je me connecte </button>
    );
};

export default UserCard;