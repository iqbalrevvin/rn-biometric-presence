import Action from '../ConstantReducer';

const initialState = {
    loggedIn: false,
    token: null,
};

const _loginAction = (state: any, payload: any) => ({
    ...state,
    loggedIn: true,
    token: payload,
});

const _logoutAction = () => ({
    loggedIn: false,
    token: null,
});

const AuthReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case Action.Auth.LOGIN:
            return _loginAction(state, action.payload);
        case Action.Auth.LOGOUT:
            return _logoutAction();
        default:
            return state;
    }
};

export default AuthReducers;
