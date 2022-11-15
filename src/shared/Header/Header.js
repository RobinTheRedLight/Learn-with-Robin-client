import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-accent">
                <div className="flex-1">
                    <Link className=' font-mono text-white btn btn-ghost normal-case text-2xl' to='/'>Learn With Robin</Link>
                </div>
                <ul className="text-white text-xl menu menu-horizontal px-4">
                    <Link to='/courses'>Courses</Link>
                </ul>
                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="text-white mt-3 p-2 shadow menu menu-compact dropdown-content bg-accent-focus rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;