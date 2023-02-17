import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import argentBankLogo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setLoggedIn(false);
    };

    return (
        <nav className='main-nav'>
            {loggedIn ? (
                <Link to="/user" className='main-nav-logo'>
                    <img src={argentBankLogo} alt='Logo' />
                </Link>
            ) : (
                <Link to="/" className='main-nav-logo'>
                    <img src={argentBankLogo} alt='Logo' />
                </Link>
            )}
            <div>
                {loggedIn ? (
                    <Link to="/" className='main-nav-item' onClick={handleLogout}>
                        <FontAwesomeIcon
                            data-testid='icon_user'
                            className='icon_user'
                            icon={faCircleUser}
                        />
                        Logout
                    </Link>
                ) : (
                    <Link to='/login' className='main-nav-item'>
                        <FontAwesomeIcon
                            data-testid='icon_user'
                            className='icon_user'
                            icon={faCircleUser}
                        />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;