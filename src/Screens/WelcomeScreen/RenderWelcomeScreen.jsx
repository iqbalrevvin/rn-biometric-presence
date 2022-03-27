/* eslint-disable import/extensions */
import React from 'react';
import { View, Image } from 'react-native';
import Configs from './WelcomeScreen.config';
import { Colors, Images } from '../../Utility';
import Container from '../../Components/Container';
import CText from '../../Components/CText';
import styles from './WelcomScreen.styles';
import CGap from '../../Components/CGap';
import VersionText from '../../Components/VersionText';

const RenderWelcomeScreen = (props) => {
    const { logo1 } = Images;

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
            </View>
            <View style={styles.versionInfoContainer}>
                <VersionText version='0.1.0' />
            </View>
        </Container>
    );
};

RenderWelcomeScreen.displayName = Configs.displayName;
RenderWelcomeScreen.defaultProps = Configs.defaultProps;
RenderWelcomeScreen.propTypes = Configs.propTypes;

export default RenderWelcomeScreen;
