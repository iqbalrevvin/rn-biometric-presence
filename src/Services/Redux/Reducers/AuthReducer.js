import Action from '../ConstantReducer';

const initialState = {
    loggedIn: false,
    token: 'tokentest123',
};

const AuthReducers = (state = initialState, action = null) => {
    switch (action.type) {
        case Action.Auth.LOGIN:
            return {
                ...state,
                loggedIn: true,
                token: action.payload,
            };
        case Action.Auth.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                token: null,
            };
        default:
            return state;
    }
};

export default AuthReducers;
