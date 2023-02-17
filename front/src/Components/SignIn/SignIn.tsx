import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { login } from '../../actions/auth';
import { RootState } from '../../reducers/index';
import Footer from '../Footer/Footer';
import './SignIn.css';

const SignIn = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [emailPasswordError, setEmailPasswordError] = useState<string>('');

    const { isLoggedIn } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch<AppDispatch>();

    const navigate = useNavigate();

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        setUserName(username);
        setEmailPasswordError('');
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
        setEmailPasswordError('');
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = await dispatch(login(userName, password)) as string | undefined;
            if (token) {
                localStorage.setItem('user', token);
                navigate('/user');
            }
        } catch (error) {
            setEmailPasswordError("Invalid username or password");
        }

        setLoading(false);
    };

    if (isLoggedIn && localStorage.getItem('user')) {
        return <Navigate to="/user" />;
    }

    return (
        <div className="parent">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon data-testid="icon_user" className="icon_user" icon={faCircleUser} />
                    <h1>Sign In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={onChangeUsername} value={userName} />
                        </div>
                        <br />
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={onChangePassword} value={password} />
                        </div>
                        <div className="emailPassword error">{emailPasswordError}</div>
                        <br />
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <input className="sign-in-button" type="submit" value="Sign In" disabled={loading} />
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;