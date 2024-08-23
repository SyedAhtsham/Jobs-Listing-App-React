import React, { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaMapMarker, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const CompanyProfile = () => {
    const navigate = useNavigate();

    // State to manage password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <>
            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 w-full gap-6">
                        <main>
                            <div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                    <h2 className="text-2xl">BitSol Technologies</h2>
                                    <p className="mt-2 mb-4">
                                        <FaMapMarker className="text-orange-700 inline mb-2 mr-1" />
                                        3416 Juneway, Baltimore, MD
                                    </p>
                                    <p className="my-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quis rerum est ipsam recusandae provident quod inventore nesciunt. Nihil voluptatibus praesentium corrupti ad optio! Odio facilis quibusdam debitis harum nobis!
                                    </p>

                                    <hr className="my-4" />

                                    <h3 className="text-xl">Contact Email:</h3>
                                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                                        bitsol@gmail.com
                                    </p>

                                    <h3 className="text-xl mt-6">Contact Phone:</h3>
                                    <p className="my-2 bg-indigo-100 p-2 font-bold">+92315-5726162</p>


                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    <h3 className="text-xl font-bold mb-6">Login Credentials</h3>

                                    {/* Password Field */}
                                    <h3 className="text-xl">Email:</h3>
                                    <div className="my-2 bg-indigo-100 p-2 font-bold flex items-center">
                                        <span className="mr-2">
                                            bitsol@gmail.com
                                        </span>

                                    </div>

                                    {/* Password Field */}
                                    <h3 className="text-xl mt-6">Password:</h3>
                                    <div className="flex items-center my-2 bg-indigo-100 p-2 ">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            value={"shah1234"}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-indigo-100 font-bold  focus:outline-none "
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
