import React, { Fragment, ReactNode, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, Image } from 'react-native';
import Configs from './SplashScreen.config';
import { Colors, Images, Screen } from '../../Utility';
import Container from '~Components/Container';
import CText from '~Components/CText';
import styles from './SplashScreen.styles';
import CGap from '~Components/CGap';
import Animation from '~Utility/Animation';
import VersionText from '~Components/VersionText';
import { ContainerState, HookContainerState, Props } from './SplashScreen.type';

/**
 * @description process of state container
 * @returns {HookContainerState}
 */
const useHookContainerState = (): HookContainerState => {
    const [containerState, setContainerState] = React.useState({
        backgroundColor: Colors.white,
        barColor: Colors.white,
        barType: Colors.barDarkStyle,
        withOverlayLoading: false,
        loadingText: '',
    });
    return { containerState, setContainerState };
};

/**
 * @description Render Logo Title
 * @returns {ReactNode}
 */
const renderLogoTitle = (): ReactNode => {
    const { logo1 } = Images;
    return (
      <Fragment>
        <Image source={logo1} style={styles.logoSection} />
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

/**
 * @description Render Animation
 * @returns {ReactNode}
 */
const renderAnimation = (): ReactNode => {
    const { loadingAnimationPrimary } = Animation;
    return (
      <LottieView
        source={loadingAnimationPrimary}
        style={styles.animationSection} autoPlay
        loop
        />
    );
};

/**
 * @description Render Version Text
 * @returns {ReactNode}
 */
const renderVersionText = () => (
  <View style={styles.versionInfoContainer}>
    <VersionText version="0.1.0" />
  </View>
);

/**
 * @description Use direct effect to redirect to next screen
 * @param {Props} props
 * @returns {void}
 */
const useDirectEffect = (props: Props): void => {
    const { navigation, loggedIn, token } = props;
    useEffect(() => {
        setTimeout(() => {
            if (loggedIn && token) navigation.replace(Screen.INDEX_SCREEN.name);
            else navigation.replace(Screen.LOGIN_SCREEN.name);
        }, 2000);
    });
};

/**
 * @description Get container props
 * @param {ContainerState} containerState
 * @returns {ContainerProps}
 */
const getContainerProps = (containerState: ContainerState) => ({
    backgroundColor: containerState.backgroundColor,
    barColor: containerState.barColor,
    barType: containerState.barType,
    withOverlayLoading: containerState.withOverlayLoading,
    loadingText: containerState.loadingText,
});

/**
 * @description Render Splash Screen
 * @param {Props} props
 * @returns {ReactNode}
 */
const SplashScreenComponent = (props: Props) => {
    const hookContainer = useHookContainerState();
    useDirectEffect(props);
    return (
      <Container {...getContainerProps(hookContainer.containerState)}>
        <View style={styles.container}>
          {renderLogoTitle()}
          {renderAnimation()}
        </View>
        {renderVersionText()}
      </Container>
    );
};

SplashScreenComponent.displayName = Configs.displayName;
SplashScreenComponent.defaultProps = Configs.defaultProps;
SplashScreenComponent.propTypes = Configs.propTypes;

export default SplashScreenComponent;
