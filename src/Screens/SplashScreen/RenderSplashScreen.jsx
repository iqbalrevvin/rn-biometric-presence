/* eslint-disable import/extensions */
import React, { Fragment, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, Image } from 'react-native';
import Configs from './SplashScreen.config';
import { Colors, Images, Screen } from '../../Utility';
import Container from '../../Components/Container';
import CText from '../../Components/CText';
import styles from './SplashScreen.styles';
import CGap from '../../Components/CGap';
import Animation from '../../Utility/Animation';
import VersionText from '../../Components/VersionText';

const renderLogoTitle = () => {
    const { logo1 } = Images;
    return (
        <Fragment>
            <Image source={logo1} style={{ width: 120, height: 120 }} />
            <CText color={Colors.primary} bold size={20}>
                Biometric Presence
            </CText>
            <CGap height={10} />
            <CText color={Colors.grey500} size={18}>
                Provide absent wherever
            </CText>
        </Fragment>
    );
};

const renderAnimation = () => {
    const { loadingAnimationPrimary } = Animation;
    return (
        <LottieView
            source={loadingAnimationPrimary}
            style={styles.animationSection} autoPlay
            loop
        />
    );
};

const renderVersionText = () => (
    <View style={styles.versionInfoContainer}>
        <VersionText version='0.1.0' />
    </View>
);

const useDirectEffect = (props) => {
    const { navigation, loggedIn, token } = props;
    useEffect(() => {
        setTimeout(() => {
            if (loggedIn && token) navigation.replace(Screen.INDEX_SCREEN.name);
            else navigation.replace(Screen.LOGIN_SCREEN.name);
        }, 2500);
    }, []);
};

const RenderSplashScreen = (props) => {
    useDirectEffect(props);
    return (
        <Container withOverlayLoading={false}>
            <View style={styles.container}>
                {renderLogoTitle()}
                {renderAnimation()}
            </View>
            {renderVersionText()}
        </Container>
    );
};

RenderSplashScreen.displayName = Configs.displayName;
RenderSplashScreen.defaultProps = Configs.defaultProps;
RenderSplashScreen.propTypes = Configs.propTypes;

export default RenderSplashScreen;
