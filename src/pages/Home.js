import React from 'react';

import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

import { USER_MAIN_DATA } from '../_services/DataMocked'

const Home = () => {

    const userDatas = USER_MAIN_DATA
    // console.log(userDatas)

    let navigate = useNavigate()


    const us = () => {
        console.log('click')
        
        navigate('../Dashboard')
    }

    return (
        <section className='home main'>
            <h2>Se connecter en tant que :</h2>
            {userDatas.map(userData =>
            <Link to={`/dashboard/${userData.id}`} key={userData.id}>


            </Link>
                
                )}
            <div className="usercards">
            <button onClick={() => us(12)}> user 12</button>
            <button onClick={() => us(18)}> user 18</button>
            </div>
        </section>
    );
};

export default Home;