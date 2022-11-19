import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const LoginPage = () => {
    const [error, setError] = useState('');

    const { signIn, setLoading, providerLogin, providerGithubLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Log in failed');
                }
            })
            .catch(error => setError(error.message))
    }
    const handleGithubSignIn = () => {
        providerGithubLogin(githubProvider)
            .then(result => {
                console.log(result)
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Log in failed');
                }
            })
            .catch(error => setError(error.message))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            <div className='flex justify-center mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="email" name="email" placeholder="Enter email" required className="w-full input input-bordered" />
                        </label>
                    </div>

                    <div className="form-control" >
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">
                            <span>Password</span>
                            <input name="password" type="password" placeholder="Password" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <p className="text-red-700">{error}</p>
                    </div>
                    <button className="btn btn-accent mt-4">Login</button>

                </form>
            </div>
            <p className='text-center text-lg'>or login with</p>
            <div className='flex justify-center pt-5'>
                <div className='px-3'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle /></button>
                </div>
                <div className='px-3'>
                    <button onClick={handleGithubSignIn} className="btn btn-outline"><FaGithub /></button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;