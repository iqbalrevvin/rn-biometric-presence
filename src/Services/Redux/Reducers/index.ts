import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';
import LoadingReducer from './LoadingReducer';
import ProfileReducer from './ProfileReducer';

const Reducer = combineReducers({
    auth: AuthReducers,
    loading: LoadingReducer,
    profile: ProfileReducer,
});

export default Reducer;
