import { COMPANY_SIGNIN_FAIL, COMPANY_SIGNIN_REQUEST, COMPANY_SIGNIN_RESET, COMPANY_SIGNIN_SUCESS } from "../constants/companyConstants"

export const companySigninReducer = (state = { }, action) => {
    switch (action.type) {
        case COMPANY_SIGNIN_REQUEST:
            return { loading: true, companyInfo: null, isAuthenticated: false }
        case COMPANY_SIGNIN_SUCESS:
            return {
                loading: false,
                companyInfo: action.payload,
                isAuthenticated: true
            }
        case COMPANY_SIGNIN_FAIL:
            return { loading: false, companyInfo: null, isAuthenticated: false, error: action.payload }
        case COMPANY_SIGNIN_RESET:
            return {}

        default:
            return state;
    }
}