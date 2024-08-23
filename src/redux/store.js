import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobReducer } from './reducers/jobReducer';
import { companySigninReducer } from './reducers/companyReducer';


// combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    companySignIn: companySigninReducer
});

//initial state
let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;