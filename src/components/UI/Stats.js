import React from 'react';

import apple from '@/styles/img/apple.svg'
import cheeseburger from '@/styles/img/cheeseburger.svg'
import chicken from '@/styles/img/chicken.svg'
import energy from '@/styles/img/energy.svg'

/**
 * it take in a type and value, and return a div with icon, title and unit
 * 
 * @prop {String} type of keyData
 * @prop {String} value of the keyData
 * 
 * @return {React.ReactElement} a react component
 */
const Stats = ({type , value}) => {

    let stat = { icon: '', unit: '', title: '' }

    switch (type) {
        case 'calorieCount':
            stat = {
                icon: energy,
                unit: 'kCal',
                title: 'Calories',
            }
            break
        case 'proteinCount':
            stat = {
                icon: chicken,
                unit: 'g',
                title: 'Proteines',
            }
            break
        case 'carbohydrateCount':
            stat = {
                icon: apple,
                unit: 'g',
                title: 'Glucides',
            }
            break
        case 'lipidCount':
            stat = {
                icon: cheeseburger,
                unit: 'g',
                title: 'Lipides',
            }
            break
        default: break


    }

    return (
        <div className='stats'>
            <div className={`stat-icon icon-${stat.title}`} >
                <img src={stat.icon} alt={stat.title} />
            </div>
            <div className='stat-contain'>
                <h2>{value}{stat.unit}</h2>
                <p>{stat.title}</p>
            </div>
        </div>
    );





};

export default Stats;