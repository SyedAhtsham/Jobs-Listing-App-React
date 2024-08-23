import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupPage = () => {
    const navigate = useNavigate();

    // State to manage form fields
    const [companyName, setCompanyName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        // Code to handle sign up goes here (e.g., API call to register the company)

        toast.success('Company registered successfully!');
        navigate('/dashboard');
    };

    return (
        <section className="bg-indigo-50 min-h-screen flex items-center justify-center p-4">
            <div className="container mx-auto p-6  w-full bg-white rounded-lg shadow-md ">
                <div className="grid grid-cols-1 w-full gap-6">
                <h3 className="text-2xl font-bold mb-6 text-center">Company Sign Up</h3>
                <form onSubmit={handleFormSubmit}>
                    {/* Company Name and Contact Phone */}
                    <div className="flex gap-4 mb-4">
                        <div className="w-1/2">
                            <label className="text-xl">Company Name:</label>
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="w-full p-2 mt-2 bg-indigo-100 rounded-md"
                                placeholder="Enter company name"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="text-xl">Phone:</label>
                            <input
                                type="text"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                                className="w-full p-2 mt-2 bg-indigo-100 rounded-md"
                                placeholder="Enter contact phone"
                                required
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label className="text-xl">Address:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 mt-2 bg-indigo-100 rounded-md"
                            placeholder="Enter company address"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="text-xl">Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 mt-2 bg-indigo-100 rounded-md"
                            placeholder="Describe your company"
                            rows="3"
                            required
                        />
                    </div>

                    {/* Contact Email */}
                    <div className="mb-4">
                        <label className="text-xl">Email:</label>
                        <input
                            type="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full p-2 mt-2 bg-indigo-100 rounded-md"
                            placeholder="Enter contact email"
                            required
                        />
                    </div>

                    {/* Password and Confirm Password */}
                    <div className="flex gap-4 mb-4">
                        <div className="w-1/2">
                            <label className="text-xl">Password:</label>
                            <div className="flex items-center mt-2 bg-indigo-100 p-2 rounded-md">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-indigo-100 p-2 font-bold rounded-md"
                                    placeholder="Enter password"
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
                        <div className="w-1/2">
                            <label className="text-xl">Confirm Password:</label>
                            <div className="flex items-center mt-2 bg-indigo-100 p-2 rounded-md">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-indigo-100 p-2 font-bold rounded-md"
                                    placeholder="Confirm password"
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
                    </div>

                   

                    {/* Already Registered and Log In */}
                        <div className="mt-6 text-center">
                            {/* Sign Up Button */}

                            <button
                                type="submit"
                                className=" bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-20 mb-5 rounded-full focus:outline-none focus:shadow-outline mt-6"
                            >
                                Sign Up
                            </button>
                        <p className="text-gray-600">Already registered?</p>
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="text-indigo-500 hover:text-indigo-600 font-bold mt-2"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
                </div>
        </section>
    );
};

export default SignupPage;
