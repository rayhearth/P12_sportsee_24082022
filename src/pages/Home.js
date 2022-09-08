import React from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {

    // const userDatas = USER_MAIN_DATA

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


/*code de connexion:
<div className="usercards">
                {userDatas.map((userData , index) => (
                    
                        <UserCard key={index}
                        id = {userData.id}
                        name = {userData.name}>
                        </UserCard>
                )
            )}
            </div>
*/