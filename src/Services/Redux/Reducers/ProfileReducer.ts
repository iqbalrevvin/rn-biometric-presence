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
};

const _setProfileAction = (
    state: any, payload: any
) => ({
    ...state,
    ...payload,
});

const ProfileReducer = (state = initialState, action: any) => {
    switch (action.type){
        case Action.Profile.SET_PROFILE:
            return _setProfileAction(state, action.payload);
        default:
            return state;
    }
};

export default ProfileReducer;
