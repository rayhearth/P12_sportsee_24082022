import React from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate()


    const us = () => {
        console.log('click')
        navigate('../Dashboard')
    }

    return (
        <section className='home main'>
            <h2>Se connecter en tant que :</h2>
            <div className="usercards">
            <button onClick={() => us(12)}> user 12</button>
            <button onClick={() => us(18)}> user 18</button>
            </div>
        </section>
    );
};

export default Home;