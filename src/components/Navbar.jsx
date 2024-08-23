import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaUser, FaEdit, FaSignOutAlt } from 'react-icons/fa';
import LogoutButton from './LogoutButton';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            {/* <!-- Logo --> */}
                            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                    React Jobs
                                </span>
                            </NavLink>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink to="/" className={linkClass}>Home</NavLink>
                                    <NavLink to="/jobs" className={linkClass}>All Jobs</NavLink>
                                    <NavLink to="/your-jobs" className={linkClass}>Your Jobs</NavLink>
                                    <NavLink to="/your-jobs" className={linkClass}>Add Job</NavLink>
                                    {/* Dropdown Menu */}
                                    <div className="relative">
                                        <button
                                            onClick={toggleDropdown}
                                            className="flex items-center text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 focus:outline-none"
                                        >
                                            BitSol Tech <FaChevronDown className="inline ml-1 text-sm" />
                                        </button>
                                        {dropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                    <NavLink
                                                        to="/profile"
                                                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                        role="menuitem"
                                                    >
                                                        Profile <FaUser className="ml-2" />
                                                    </NavLink>
                                                    <NavLink
                                                        to="/edit-profile"
                                                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                        role="menuitem"
                                                    >
                                                        Edit Profile <FaEdit className="ml-2" />
                                                    </NavLink>
                                                    <div>
                                                        <LogoutButton />
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
