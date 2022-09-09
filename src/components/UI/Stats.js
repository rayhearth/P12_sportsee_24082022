import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';

import apple from '@/styles/img/apple.svg'
import cheeseburger from '@/styles/img/cheeseburger.svg'
import chicken from '@/styles/img/chicken.svg'
import energy from '@/styles/img/energy.svg'

import { dataServices } from '@/_services/Datamanager';
import { type } from '@testing-library/user-event/dist/type';

const Stats = () => {

    /**@param {Number} userId */
    const { userId } = useParams()

    const { isLoading, data } = useQuery('userStat', () => dataServices.getUser(userId))
    const userStat = data || {}
console.log(userStat)


    if (isLoading) {
        return <div>Loading ...</div>
    }

    
    let stat = { icon: '', color: '', unit: '', title: '' }

    switch () {
        case 'calorieCount':
            stat = {
                icon: energy,
                color: 'red',
                unit: 'kCal',
                title: 'Calories',
            }
            break
        case 'proteinCount':
            stat = {
                icon: chicken,
                color: 'blue',
                unit: 'g',
                title: 'Proteines',
            }
            break
        case 'carbohydrateCount':
            stat = {
                icon: apple,
                color: 'yellow',
                unit: 'g',
                title: 'Glucides',
            }
            break
        case 'lipidCount':
            stat = {
                icon: cheeseburger,
                color: 'pink',
                unit: 'g',
                title: 'Lipides',
            }
            break
    }






    return (
        <div className='stats'>

        </div>
    );
};

export default Stats;