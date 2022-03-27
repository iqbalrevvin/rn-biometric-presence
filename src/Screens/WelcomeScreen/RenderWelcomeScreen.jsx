/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import Configs from './RenderWelcome.config';
import { Screen } from '../../Utility';
import Container from '../../Components/Container';
import CText from '../../Components/CText';

const RenderWelcomeScreen = (props) => {
    const { navigation, loggedIn, token } = props;
    useEffect(() => {
        setTimeout(() => {
            if (loggedIn && token) navigation.navigate(Screen.INDEX_SCREEN.name);
            else navigation.navigate(Screen.LOGIN_SCREEN.name);
        }, 2000);
    }, []);

    return (
        <Container withOverlayLoading={false}>
            <CText bold>Welcome Screen {token}</CText>
        </Container>
    );
};

RenderWelcomeScreen.displayName = Configs.displayName;
RenderWelcomeScreen.defaultProps = Configs.defaultProps;
RenderWelcomeScreen.propTypes = Configs.propTypes;

export default RenderWelcomeScreen;
