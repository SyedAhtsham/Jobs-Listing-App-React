import axios from 'axios';
import { COMPANY_SIGNIN_FAIL, COMPANY_SIGNIN_REQUEST, COMPANY_SIGNIN_SUCESS } from "../constants/companyConstants"
import { toast } from 'react-toastify';


export const signInAction = (company) => async (dispatch) => {

    dispatch({ type: COMPANY_SIGNIN_REQUEST });

    try {
        const { data } = await axios.post('/api/signin', company);
        dispatch({
            type: COMPANY_SIGNIN_SUCESS,
            payload: data
        });
        toast.success("Logged in Successfully")
    } catch (error) {
        dispatch({
            type: COMPANY_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error || "Invalid Credentials");
    }
}


