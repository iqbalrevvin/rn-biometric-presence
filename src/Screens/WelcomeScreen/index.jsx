/* eslint-disable import/extensions */
import React from 'react';
import WelcomeScreenComponent from './WelcomeScreen.component';
import Configs from './WelcomeScreen.config';

const WelcomeScreen = ({ navigation }) => {
    const welcomeScreenProps = () => ({
        navigation,
    });

    return (
      <WelcomeScreenComponent {...welcomeScreenProps()} />
    );
};

WelcomeScreen.displayName = Configs.displayName;
WelcomeScreen.defaultProps = Configs.defaultProps;
WelcomeScreen.propTypes = Configs.propTypes;

export default WelcomeScreen;
