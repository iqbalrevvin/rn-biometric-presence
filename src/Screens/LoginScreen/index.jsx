import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import LoginScreenComponent from './LoginScreen.component';
import Configs from './RenderLogin.config';
import { loginAction } from '~Services/Redux/Actions/AuthAction';
import { setProfileAction } from '~Services/Redux/Actions/ProfileAction';
import { loadingPageAction } from '~Services/Redux/Actions/LoadingAction';
import { submitSignin } from './LoginScreen.action';

const _getLoginScreenProps = (props, mutation, stateReducer, dispatch) => ({
    navigation: props.navigation,
    loadingPage: stateReducer.loading.loadingPage,
    loadingPageText: stateReducer.loading.loadingPageText,
    setLoadingPage: (loadingPage, loadingPageText) => dispatch(
        loadingPageAction(loadingPage, loadingPageText),
    ),
    setLogin: (token) => dispatch(loginAction(token)),
    setProfile: (payload) => dispatch(setProfileAction(payload)),
    loginMutation: mutation.loginMutation,
});

const LoginScreen = (props) => {
    const stateReducer = useSelector((state) => state);
    const dispatch = useDispatch();
    const mutation = {
        loginMutation: useMutation(submitSignin),
    };
    return (
      <LoginScreenComponent {..._getLoginScreenProps(props, mutation, stateReducer, dispatch)} />
    );
};

LoginScreen.defaultProps = Configs.defaultProps;
LoginScreen.propTypes = Configs.propTypes;

export default LoginScreen;
