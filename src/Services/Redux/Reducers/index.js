import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';
import LoadingReducer from './LoadingReducer';

const Reducer = combineReducers({
    auth: AuthReducers,
    loading: LoadingReducer,
});

export default Reducer;
