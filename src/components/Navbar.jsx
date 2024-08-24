import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaUser, FaEdit, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { companyInfo } = useSelector((state) => state.companySignIn || {});
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Check if the current route matches "profile" or "edit-profile"
    const isProfileActive = location.pathname === '/profile' || location.pathname === '/edit-profile';
    const isEmployerActive = location.pathname === '/login' || location.pathname === '/signup';

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

    // Function to close the dropdown when a link is clicked
    const handleLinkClick = () => {
        setDropdownOpen(false);
    };

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
                                    <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                                    {
                                        companyInfo ?
                                            <div className='flex flex-row'>
                                                <NavLink to="/your-jobs" className={linkClass}>Your Jobs</NavLink>
                                                <NavLink to="/add-job" className={linkClass}>Add Job</NavLink>

                                                <div className="relative" ref={dropdownRef}>
                                                    <button
                                                        onClick={toggleDropdown}
                                                        className={`flex items-center text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 focus:outline-none ${dropdownOpen || isProfileActive ? "bg-black" : ""}`}
                                                    >
                                                        {companyInfo.user.name} <FaChevronDown className="inline ml-1 text-sm" />
                                                    </button>

                                                    {dropdownOpen && (
                                                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                <NavLink
                                                                    to="/profile"
                                                                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                                    role="menuitem"
                                                                    onClick={handleLinkClick} // Close dropdown on click
                                                                >
                                                                    Profile <FaUser className="ml-2" />
                                                                </NavLink>
                                                                <NavLink
                                                                    to="/edit-profile"
                                                                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                                    role="menuitem"
                                                                    onClick={handleLinkClick} // Close dropdown on click
                                                                >
                                                                    Edit Profile <FaEdit className="ml-2" />
                                                                </NavLink>
                                                                <NavLink to="/" onClick={handleLinkClick}>
                                                                    <LogoutButton />
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            :
                                            <div className="relative" ref={dropdownRef}>
                                                <button
                                                    onClick={toggleDropdown}
                                                    className={`flex items-center text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 focus:outline-none ${dropdownOpen || isEmployerActive ? "bg-black" : ""}`}
                                                >
                                                    Employer? <FaChevronDown className="inline ml-1 text-sm" />
                                                </button>

                                                {dropdownOpen && (
                                                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                            <NavLink
                                                                to="/login"
                                                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                                role="menuitem"
                                                                onClick={handleLinkClick} // Close dropdown on click
                                                            >
                                                                Login <FaSignInAlt className="ml-2" />
                                                            </NavLink>
                                                            <NavLink
                                                                to="/signup"
                                                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                                role="menuitem"
                                                                onClick={handleLinkClick} // Close dropdown on click
                                                            >
                                                                Signup <FaUserPlus className="ml-2" />
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                    }
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
