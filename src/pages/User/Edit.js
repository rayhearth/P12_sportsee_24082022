import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {

    //on destructure le useParams pour recup l'id
    let {uid} = useParams


    return (
        <div className='edit'>
            User Edit
        </div>
    );
};

export default Edit;