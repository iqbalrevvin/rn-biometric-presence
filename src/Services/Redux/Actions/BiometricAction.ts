import Action from '../ConstantReducer';

export const setBiometricIdAction = (id: string) => ({
    type: Action.Profile.SET_BIOMETRIC_ID,
    payload: id,
});
