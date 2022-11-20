import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Log in failed');
                }
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (

        <div>
            <div className='text-center'>
                <h1 className='p-6 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Please Register!</h1>
            </div>
            <div className='flex justify-center mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <label className="input-group">
                            <span>Full Name</span>
                            <input name="name" type="text" placeholder="Full Name" required className="w-80 input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Photo URL</span>
                            <input name="photoURL" type="text" placeholder="Phot URL" required className="w-80 input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <label className="input-group">
                            <span>Your Email</span>
                            <input name="email" type="email" placeholder="Enter email" required className="w-80 input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">
                            <span>Password</span>
                            <input name="password" type="password" placeholder="Password" required className="w-80 input input-bordered" />
                        </label>
                    </div>

                    <div>
                        <p className="text-red-700">{error}</p>
                    </div>
                    <button className=" btn btn-accent mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;