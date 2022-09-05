import React, { useEffect }  from 'react';

import { dataServices } from '@/_services/Datamanager';

const Dashboard = () => {

    useEffect(() => {
        dataServices.get()
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className='dashboard'>
            <h1>Bonjour Thomas</h1>
        </div>
    );
};

export default Dashboard;