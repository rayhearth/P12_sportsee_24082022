import React from 'react';
import { Link } from 'react-router-dom';
import yoga from '@/styles/img/yoga.svg'
import nage from '@/styles/img/nage.svg'
import velo from '@/styles/img/velo.svg'
import haltere from '@/styles/img/haltere.svg'

/**
@component
@return{jsx.Element}
 */

const SideBar = () => {
    return (
        <div className='sidebar'>
            <ul className="sidebar-menu">
                <li className='sidebar-link'><Link to='/dashboard'><img src={yoga} alt="" /></Link></li>
                <li className='sidebar-link'><Link to='/dashboard'><img src={nage} alt="nage" /></Link></li>
                <li className='sidebar-link'><Link to='/dashboard'><img src={velo} alt="velo" /></Link></li>
                <li className='sidebar-link'><Link to='/dashboard'><img src={haltere} alt="haltere" /></Link></li>
            </ul>
            <div className="sidebar-copyright"><span>Copyright, SportSee 2020</span></div>
        </div>
    );
};

export default SideBar;