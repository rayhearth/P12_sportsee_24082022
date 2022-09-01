import React from 'react';
import { Link } from 'react-router-dom';
import yoga from '../styles/img/yoga.svg'

/*
@component
@return{jsx.Element}
*/

const SideBar = () => {
    return (
        <div className='sidebar'>
            <ul className="sidebar-menu">
                <li className='sidebar-link'><Link to='/dashboard'><img src={yoga} alt="" /></Link></li>
                <li className='sidebar-link'><img src={process.env.PUBLIC_URL + '/assets/img/nage.svg'} alt="nage" /></li>
                <li className='sidebar-link'><img src={process.env.PUBLIC_URL + '/assets/img/velo.svg'} alt="velo" /></li>
                <li className='sidebar-link'><img src={process.env.PUBLIC_URL + '/assets/img/haltere.svg'} alt="haltere" /></li>
            </ul>
            <div className="sidebar-copyright"><span>Copyright, SportSee 2020</span></div>
        </div>
    );
};

export default SideBar;