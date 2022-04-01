/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../Services/Redux/Actions/AuthAction';
import RenderSplashScreen from './RenderSplashScreen';
import Configs from './SplashScreen.config';

const SplashScreen = ({ navigation }) => {
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const SplashScreenProps = () => ({
        loggedIn: authState.loggedIn,
        token: authState.token,
        setLogin: (token) => dispatch(loginAction(token)),
        navigation,
    });

    return (
        <RenderSplashScreen {...SplashScreenProps()} />
    );
};

SplashScreen.displayName = Configs.displayName;
SplashScreen.defaultProps = Configs.defaultProps;
SplashScreen.propTypes = Configs.propTypes;

export default SplashScreen;
