import {
    COMPANY_SIGNIN_FAIL,
    COMPANY_SIGNIN_REQUEST,
    COMPANY_SIGNIN_RESET,
    COMPANY_SIGNIN_SUCESS,
    COMPANY_LOGOUT
} from "../constants/companyConstants";

// Define an initial state
const initialState = {
    loading: false,
    companyInfo: null,
    isAuthenticated: false,
    error: null
};

// signin reducer function
export const companySigninReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case COMPANY_SIGNIN_SUCESS:
            return {
                ...state,
                loading: false,
                companyInfo: action.payload,
                isAuthenticated: true,
                error: null
            };

        case COMPANY_SIGNIN_FAIL:
            return {
                ...state,
                loading: false,
                companyInfo: null,
                isAuthenticated: false,
                error: action.payload
            };

        case COMPANY_LOGOUT:
            return {
                ...initialState
            };

        case COMPANY_SIGNIN_RESET:
            return {
                ...initialState
            };

        default:
            return state;
    }
};
