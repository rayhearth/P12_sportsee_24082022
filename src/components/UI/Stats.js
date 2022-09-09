import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';

import apple from '@/styles/img/apple.svg'
import cheeseburger from '@/styles/img/cheeseburger.svg'
import chicken from '@/styles/img/chicken.svg'
import energy from '@/styles/img/energy.svg'

import { dataServices } from '@/_services/Datamanager';

const Stats = () => {

    const { userId } = useParams()

    const { isLoading, data } = useQuery('userStat', () => dataServices.getUser(userId))
    const userStat = data || {}

    if (isLoading) {
        return <div>Loading ...</div>
    }



    return (
        <div className='stats'>
            
        </div>
    );
};

export default Stats;