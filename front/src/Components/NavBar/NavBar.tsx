import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../reducers/index';
import { logout } from '../../actions/auth';
import { useState, useEffect } from 'react';

import './NavBar.css';

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);


    useEffect(() => {
        // Vérifier si l'utilisateur est connecté
        if (user) {
            setLoggedIn(true);

        } else {
            setLoggedIn(false);

        }
        console.log("loggedIn", loggedIn);

    }, [user]);

    const handleLogout = () => {
        dispatch(logout());
    };

    const [loggedIn, setLoggedIn] = useState(false);

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