import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../redux/actions/companyActions';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading = false, companyInfo = null, error = null, isAuthenticated = false } = useSelector((state) => state.companySignIn || {});

    const [contactEmail, setContactEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [isAuthenticated, navigate]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Dispatch the login action
            await dispatch(signInAction({ contactEmail, password }));
        } catch (err) {
            toast.error(error || 'Invalid Credentials');
        }
    };

    return (
        <section className="bg-indigo-50 min-h-screen flex items-start pt-40 justify-center p-4">
            <div className="container mx-auto p-6 w-full max-w-md bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center">Log In</h3>
                <form onSubmit={handleFormSubmit}>
                    {/* contactEmail */}
                    <div className="mb-4">
                        <label className="text-xl">Email:</label>
                        <input
                            type="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full p-2 mt-2 bg-indigo-100 rounded-md"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="text-xl">Password:</label>
                        <div className="relative mt-2">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-indigo-100 p-2 rounded-md pr-10" // Adjust padding on the right
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-2 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
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
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Log In'}
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
