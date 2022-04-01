/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
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

const RenderSplashScreen = (props) => {
    const { navigation, loggedIn, token } = props;
    const { logo1 } = Images;
    const { loadingAnimationPrimary } = Animation;
    useEffect(() => {
        setTimeout(() => {
            if (loggedIn && token) navigation.navigate(Screen.INDEX_SCREEN.name);
            else navigation.navigate(Screen.LOGIN_SCREEN.name);
        }, 2500);
    }, []);

    return (
        <Container withOverlayLoading={false}>
            <View style={styles.container}>
                <Image source={logo1} style={{ width: 100, height: 100 }} />
                <CText color={Colors.primary} bold size={18}>
                    Biometric Presence
                </CText>
                <CGap height={10} />
                <CText color={Colors.grey500} size={15}>
                    Provide absent wherever
                </CText>
                <LottieView
                    source={loadingAnimationPrimary}
                    style={styles.animationSection} autoPlay
                    loop
                />
            </View>
            <View style={styles.versionInfoContainer}>
                <VersionText version='0.1.0' />
            </View>
        </Container>
    );
};

RenderSplashScreen.displayName = Configs.displayName;
RenderSplashScreen.defaultProps = Configs.defaultProps;
RenderSplashScreen.propTypes = Configs.propTypes;

export default RenderSplashScreen;
