import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='headerLogo'>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/logo.svg'} alt='logo Sportsee' />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to='/home'>Accueil</Link></li>
                    <li><Link to=''>Profil</Link></li>
                    <li><Link to=''>Réglage</Link></li>
                    <li><Link to=''>Communauté</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;