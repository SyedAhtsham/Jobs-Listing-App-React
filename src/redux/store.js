import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import as default
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobReducer } from './reducers/jobReducer';
import { companySigninReducer } from './reducers/companyReducer';

const reducer = combineReducers({
    loadJobs: loadJobReducer,
    companySignIn: companySigninReducer,
});

const companyInfoFromStorage = localStorage.getItem('companyInfo')
    ? JSON.parse(localStorage.getItem('companyInfo'))
    : null;

const initialState = {
    companySignIn: {
        companyInfo: companyInfoFromStorage,
        loading: false,
        isAuthenticated: !!companyInfoFromStorage,
        error: null,
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
