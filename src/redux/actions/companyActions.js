import axios from 'axios';
import { COMPANY_SIGNIN_FAIL, COMPANY_SIGNIN_REQUEST, COMPANY_SIGNIN_SUCESS } from "../constants/companyConstants";
import { toast } from 'react-toastify';

export const signInAction = (company) => async (dispatch) => {
    dispatch({ type: COMPANY_SIGNIN_REQUEST });

    try {
        // Send sign-in request
        const { data } = await axios.post('/api/signin', company);

        // Dispatch success action with data payload
        dispatch({
            type: COMPANY_SIGNIN_SUCESS,
            payload: data
        });

        // Store company info in localStorage
        localStorage.setItem('companyInfo', JSON.stringify(data));

        // Display success toast notification
        toast.success("Logged in Successfully");
    } catch (error) {
        // Get the error message, fallback to a generic message if necessary
        const errorMessage = error.response && error.response.data && error.response.data.error
            ? error.response.data.error
            : "Invalid Credentials";

        // Dispatch fail action with error message
        dispatch({
            type: COMPANY_SIGNIN_FAIL,
            payload: errorMessage
        });

        // Display error toast notification
        toast.error(errorMessage);
    }
};


import { COMPANY_LOGOUT } from "../constants/companyConstants";

// Action creator for logout
export const logoutAction = () => (dispatch) => {
    // Clear any user-related data in localStorage
    localStorage.removeItem('companyInfo');

    // Dispatch the logout action
    dispatch({
        type: COMPANY_LOGOUT
    });
    
    // Display success toast notification
    toast.success("Logged out successfully");
    navigate('/');
    // Optionally, you can navigate the user to a login page or home page
     // or wherever you want to redirect
};
