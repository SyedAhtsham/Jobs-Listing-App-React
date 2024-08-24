import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/companyActions';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAction());
        navigate('/jobs'); // Redirect to login or another page after logout
    };

    return (
        <button onClick={handleLogout} className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Logout
            <FaSignOutAlt className="ml-2" />
        </button>
    );
};

export default LogoutButton;
