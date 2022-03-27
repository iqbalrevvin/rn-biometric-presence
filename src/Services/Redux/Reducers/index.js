import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';

const Reducer = combineReducers({
    auth: AuthReducers,
});

export default Reducer;
