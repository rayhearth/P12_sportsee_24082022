import React from 'react';
import { useNavigate } from 'react-router-dom';

import { USER_MAIN_DATA } from '../_services/DataMocked'


import UserCard from '../components/UserCard';

const Home = () => {

    const userDatas = USER_MAIN_DATA
    console.log(userDatas)

    let navigate = useNavigate()

    const us = (id) => {
        navigate('./dashboard/' + id)
    }

    return (
        <section className='home main'>
            <h2>Se connecter en tant que :</h2>
            <div className="usercards">
                {userDatas.map((userData , index) => (
                    
                        <UserCard key={index}
                        id = {userData.id}
                        name = {userData.name}>{userData.name}</UserCard>
                )
            )}
            </div>
        </section>
    );
};

export default Home;