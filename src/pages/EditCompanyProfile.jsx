import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EditCompanyProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // State to manage form fields
    const [companyName, setCompanyName] = useState('BitSol Technologies');
    const [address, setAddress] = useState('3416 Juneway, Baltimore, MD');
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    const [contactEmail, setContactEmail] = useState('bitsol@gmail.com');
    const [contactPhone, setContactPhone] = useState('+92315-5726162');
    const [password, setPassword] = useState('CompanyPassword123');
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

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
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
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />

                                <label className="text-xl mt-6">Description:</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    rows="5"
                                    required
                                />

                                <label className="text-xl mt-6">Contact Email:</label>
                                <input
                                    type="email"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />

                                <label className="text-xl mt-6">Contact Phone:</label>
                                <input
                                    type="text"
                                    value={contactPhone}
                                    onChange={(e) => setContactPhone(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Login Credentials</h3>

                                <label className="text-xl">Email:</label>
                                <input
                                    type="email"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    className="w-full p-2 my-2 bg-indigo-100 rounded-md"
                                    required
                                />

                                <label className="text-xl mt-6">Password:</label>
                                <div className="flex items-center my-2 bg-indigo-100 p-2 rounded-md">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
