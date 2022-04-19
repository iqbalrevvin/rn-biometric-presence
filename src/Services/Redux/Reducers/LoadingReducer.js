/* eslint-disable import/extensions */
import Action from '../ConstantReducer';

const initialState = {
    loadingPage: false,
    loadingPageText: null,
};

const setLoadingPage = (state, payload) => ({
    ...state,
    loadingPage: payload.value,
    loadingPageText: payload.loadingText,
});

const LoadingReducer = (state = initialState, action = null) => {
    switch (action.type) {
        case Action.Loading.PAGE:
            return setLoadingPage(state, action.payload);
        default:
            return state;
    }
};

export default LoadingReducer;
