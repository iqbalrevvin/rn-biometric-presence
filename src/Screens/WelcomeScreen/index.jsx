/* eslint-disable import/extensions */
import React from 'react';
import RenderWelcomeScreen from './RenderWelcomeScreen';
import Configs from './WelcomeScreen.config';

const WelcomeScreen = ({ navigation }) => {
    const welcomeScreenProps = () => ({
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
