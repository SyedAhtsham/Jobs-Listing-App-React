import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarker, FaEye, FaEyeSlash } from 'react-icons/fa';
import Spinner from '../components/Spinner';

const CompanyProfile = () => {
    const navigate = useNavigate();

    // Get companyInfo from Redux state
    const { companyInfo, loading } = useSelector((state) => state.companySignIn || {});

    // State to manage password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // If the companyInfo is not available (user is not logged in), redirect to login page
    if (!companyInfo) {
        navigate('/login');
        return null;
    }

    // Show a loading spinner while the data is being fetched
    if (loading) {
        return <Spinner />;
    }

    // Destructure the necessary information from companyInfo
    const { name,address, description, contactEmail, contactPhone, password } = companyInfo.user;

    return (
        <>
            <section className="bg-indigo-50">
                <div className="container max-w-[940px] m-auto py-10 px-6">
                    <div className="grid grid-cols-1 w-full gap-6">
                        <main>
                            <div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                    <h2 className="text-2xl">{name}</h2>
                                    <p className="mt-2 mb-4">
                                        <FaMapMarker className="text-orange-700 inline mb-2 mr-1" />
                                        {/* Replace this with the actual address */}
                                        {address ? address : "n/a"}
                                    </p>
                                    <p className="my-2">
                                        {description}
                                    </p>

                                    <hr className="my-4" />

                                    <h3 className="text-xl">Email:</h3>
                                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                                        {contactEmail}
                                    </p>

                                    <h3 className="text-xl mt-6">Phone:</h3>
                                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                                        {contactPhone}
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    <h3 className="text-xl font-bold mb-6">Login Credentials</h3>

                                    <h3 className="text-xl">Email:</h3>
                                    <div className="my-2 bg-indigo-100 p-2 font-bold flex items-center">
                                        <span className="mr-2">{contactEmail}</span>
                                    </div>

                                    <h3 className="text-xl mt-6">Password:</h3>
                                    <div className="flex items-center my-2 bg-indigo-100 p-2 ">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            value={password} // Display the actual password here
                                            onChange={() => { }}
                                            className="w-full bg-indigo-100 font-bold focus:outline-none"
                                            readOnly
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="text-gray-600 hover:text-gray-800 focus:outline-none ml-2"
                                        >
                                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    <h3 className="text-xl font-bold mb-6">Manage Profile</h3>
                                    <Link
                                        to={`/edit-profile`}
                                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline mt-4"
                                    >
                                        Edit Profile
                                    </Link>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white text-center font-bold py-[9px] px-4 ml-4 rounded-full focus:outline-none focus:shadow-outline mt-4"
                                        onClick={() => onDeleteClick()}
                                    >
                                        Delete Profile
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyProfile;
