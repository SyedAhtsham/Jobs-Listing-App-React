import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Add login logic here (e.g., API call to authenticate the user)

        toast.success('Logged in successfully!');
        navigate('/dashboard');
    };

    return (
        <section className="bg-indigo-50 min-h-screen flex items-start pt-40 justify-center p-4">
            <div className="container mx-auto p-6 w-full max-w-md bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center">Log In</h3>
                <form onSubmit={handleFormSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-xl">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mt-2 bg-indigo-100 rounded-md"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="text-xl">Password:</label>
                        <div className="flex items-center mt-2 bg-indigo-100 p-2 rounded-md">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-indigo-100 p-2 font-bold rounded-md"
                                placeholder="Enter your password"
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

                    {/* Log In Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-20 rounded-full focus:outline-none focus:shadow-outline"
                        >
                            Log In
                        </button>
                    </div>
                </form>

                {/* Not Registered? Sign Up */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">Not registered?</p>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                        className="text-indigo-500 hover:text-indigo-600 font-bold mt-2"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
