/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../Services/Redux/Actions/AuthAction';
import RenderWelcomeScreen from './RenderWelcomeScreen';
import Configs from './WelcomeScreen.config';

const WelcomeScreen = ({ navigation }) => {
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [direct, setDirect] = useState(false);

    const welcomeScreenProps = () => ({
        loggedIn: authState.loggedIn,
        token: authState.token,
        setLogin: (token) => dispatch(loginAction(token)),
        direct,
        setDirect,
        navigation,
    });

    return (
        <RenderWelcomeScreen {...welcomeScreenProps()} />
    );
};

WelcomeScreen.displayName = Configs.displayName;
WelcomeScreen.defaultProps = Configs.defaultProps;
WelcomeScreen.propTypes = Configs.propTypes;

export default WelcomeScreen;
