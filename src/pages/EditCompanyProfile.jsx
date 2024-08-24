import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const EditCompanyProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { companyInfo, loading } = useSelector((state) => state.companySignIn || {});

    const { name, address, description, contactEmail, contactPhone, password } = companyInfo.user;
    

    // State to manage form fields
    const [companyName, setCompanyName] = useState(name);
    const [address1, setAddress1] = useState(address);
    const [description1, setDescription1] = useState(description);
    const [contactEmail1, setContactEmail1] = useState(contactEmail);
    const [contactPhone1, setContactPhone1] = useState(contactPhone);
    const [password1, setPassword1] = useState(password);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Code to save the updated profile goes here (e.g., API call)

        toast.success('Company profile updated successfully!');
        navigate(`/company-profile/${id}`);
    };

    // Destructure the necessary information from companyInfo


    return (
        <section className="bg-indigo-50">
            <div className="container max-w-[940px] m-auto py-10 px-6">
                <div className="grid grid-cols-1 w-full gap-6">
                    <main>
                        <form onSubmit={handleFormSubmit}>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Edit Company Info</h3>

                                <label className="text-xl">Company Name:</label>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />

                                <label className="text-xl mt-6">Address:</label>
                                <input
                                    type="text"
                                    value={address1}
                                    onChange={(e) => setAddress1(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />

                                <label className="text-xl mt-6">Description:</label>
                                <textarea
                                    value={description1}
                                    onChange={(e) => setDescription1(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    rows="5"
                                    required
                                />

                                <label className="text-xl mt-6">Email:</label>
                                <input
                                    type="email"
                                    value={contactEmail1}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />

                                <label className="text-xl mt-6">Phone:</label>
                                <input
                                    type="text"
                                    value={contactPhone1}
                                    onChange={(e) => setContactPhone1(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Login Credentials</h3>

                                <label className="text-xl">Email:</label>
                                <input
                                    type="email"
                                    value={contactEmail1}
                                    onChange={(e) => setContactEmail1(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />

                                <label className="text-xl mt-6">Password:</label>
                                <div className="flex items-center my-2 bg-indigo-100 p-2 rounded-md">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        value={password1}
                                        onChange={(e) => setPassword1(e.target.value)}
                                        className="w-full bg-indigo-100 p-2 font-bold rounded-md"
                                        required
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

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6 flex gap-4">
                                <button
                                    type="submit"
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2.5 px-6 rounded-full focus:outline-none focus:shadow-outline"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-full focus:outline-none focus:shadow-outline"
                                    onClick={() => navigate(-1)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default EditCompanyProfile;
