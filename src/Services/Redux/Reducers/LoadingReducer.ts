import Action from '../ConstantReducer';

const initialState = {
    loadingPage: false,
    loadingPageText: null,
};

const setLoadingPage = (state: any, payload: any) => ({
    ...state,
    loadingPage: payload.value,
    loadingPageText: payload.loadingText,
});

const LoadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Action.Loading.PAGE:
            return setLoadingPage(state, action.payload);
        default:
            return state;
    }
};

export default LoadingReducer;
