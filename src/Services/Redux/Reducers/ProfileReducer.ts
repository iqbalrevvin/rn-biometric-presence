import Action from '../ConstantReducer';

const initialState = {
    fullname: '',
    email: '',
    phone: '',
    divisionId: 0,
    divisionName: '',
    workHoursId: 0,
    workHoursName: '',
    workHoursInStart: '',
    workHoursInEnd: '',
    workHoursOutStart: '',
    workHoursOutEnd: '',
    biometricId: '',
};

const _setProfileAction = (state: any, payload: any) => ({
    ...state,
    ...payload,
});

const _setBiometricIdAction = (state: any, payload: string) => ({
    ...state,
    biometricId: payload,
});

const ProfileReducer = (state = initialState, action: any) => {
    switch (action.type){
        case Action.Profile.SET_PROFILE:
            return _setProfileAction(state, action.payload);
        case Action.Profile.SET_BIOMETRIC_ID:
            return _setBiometricIdAction(state, action.payload);
        default:
            return state;
    }
};

export default ProfileReducer;
