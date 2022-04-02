/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import RenderLoginScreen from './RenderLoginScreen';
import Configs from './RenderLogin.config';
import { loginAction } from '../../Services/Redux/Actions/AuthAction';

const _getLoginScreenProps = (props, dispatch) => ({
    navigation: props.navigation,
    setLogin: (token) => dispatch(loginAction(token)),
});

const LoginScreen = (props) => {
    const dispatch = useDispatch();
    return (
        <RenderLoginScreen {..._getLoginScreenProps(props, dispatch)} />
    );
};

LoginScreen.defaultProps = Configs.defaultProps;
LoginScreen.propTypes = Configs.propTypes;

export default LoginScreen;
