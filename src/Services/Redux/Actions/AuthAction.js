import Action from '../ConstantReducer';

export const loginAction = (token) => ({
    type: Action.Auth.LOGIN,
    payload: token,
});

export const logoutAction = () => ({
    type: Action.Auth.LOGOUT,
});
