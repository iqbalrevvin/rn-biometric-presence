import Action from '../ConstantReducer';

export const loadingPageAction = (value: boolean, text: string) => ({
    type: Action.Loading.PAGE,
    payload: {
        value,
        loadingText: text,
    },
});
