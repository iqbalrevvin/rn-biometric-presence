import React, { Fragment } from 'react';
import { View, Image } from 'react-native';
import Configs from './WelcomeScreen.config';
import { Colors, Images } from '../../Utility';
import Container from '../../Components/Container';
import CText from '../../Components/CText';
import styles from './WelcomScreen.styles';
import CGap from '../../Components/CGap';
import VersionText from '../../Components/VersionText';

const _renderLogo = () => {
    const { logo1 } = Images;
    return (
        <View style={styles.logoContainer}>
            <Image source={logo1} style={styles.logo} />
        </View>
    );
};

const _renderTitleApp = () => (
    <Fragment>
        <CText color={Colors.primary} bold size={20}>
            Biometric Presence
        </CText>
        <CGap height={10} />
        <CText semiBold color={Colors.grey500} size={17}>
            Provide absent wherever
        </CText>
    </Fragment>
);

const RenderWelcomeScreen = () => (
    <Container withOverlayLoading={false}>
        <View style={styles.container}>
            {_renderLogo()}
            {_renderTitleApp()}
        </View>
        <View style={styles.versionInfoContainer}>
            <VersionText version='0.1.0' />
        </View>
    </Container>
);

RenderWelcomeScreen.displayName = Configs.displayName;
RenderWelcomeScreen.defaultProps = Configs.defaultProps;
RenderWelcomeScreen.propTypes = Configs.propTypes;

export default RenderWelcomeScreen;
