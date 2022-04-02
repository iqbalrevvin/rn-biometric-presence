/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CButtonRegular from '../../Components/Buttons/CButtonRegular';
import CCard from '../../Components/CCard';
import CInput from '../../Components/CInput';
import Container from '../../Components/Container';
import CText from '../../Components/CText';
import VersionText from '../../Components/VersionText';
import { Colors, Images, Screen } from '../../Utility';
import styles from './LoginScreen.styles';

const hookContainerState = () => {
    const [containerState, setContainerstate] = React.useState({
        backgroundColor: Colors.white,
        barColor: Colors.primary,
        barType: Colors.barLightStyle,
        withOverlayLoading: false,
        loadingText: null,
    });
    return { containerState, setContainerstate };
};

const renderImageHeader = () => {
    const { bgImage1 } = Images;
    return (
        <View style={styles.bgContainer}>
            <Image source={bgImage1} style={styles.imageSection} />
        </View>
    );
};

const renderHeaderLogin = () => (
    <View style={styles.formTitleContainer}>
        <CText bold color={Colors.grey700} size={20}>BIOMETRIC PRESENCE</CText>
        <CText semiBold color={Colors.grey700} size={17}>Signin Account</CText>
    </View>
);

const renderInputEmail = () => (
    <CInput
        label={'Username / Email'}
        placeholder={'yourmail@example.com'}
        leftIconName={'user'}
    />
);

const renderInputPassword = () => (
    <CInput
        label={'Password'}
        placeholder={'Secret Password'}
        leftIconName={'unlock'}
        isPassword={true}
    />
);

const submitButton = (props) => {
    const { containerState, setContainerstate } = props.hookContainer;
    const { navigation, setLogin } = props.primaryProps;
    setContainerstate({
        ...containerState,
        withOverlayLoading: true,
        loadingText: 'Signing in...',
    });
    setTimeout(() => {
        setLogin('TokenTest123');
        navigation.replace(Screen.INDEX_SCREEN.name);
    }, 2000);
};

const renderButtonSubmit = (props) => (
    <CButtonRegular
        titleBold
        title='LOGIN ACCOUNT'
        color={Colors.primary}
        onPress={() => submitButton(props)}
    />
);

const renderForm = (props) => (
    <View style={styles.formInputSection}>
        {renderInputEmail()}
        {renderInputPassword()}
        <View style={styles.forgotPasswordSection}>
            <TouchableOpacity>
                <CText color={Colors.primary} size={14}>Forgot Password?</CText>
            </TouchableOpacity>
        </View>
        <View>
            {renderButtonSubmit(props)}
        </View>
    </View>
);

const renderBodyContent = (props) => (
    <View style={styles.formContainer}>
        <CCard borderRadius={5} elevation={2}>
            <View style={styles.formSection}>
                {renderHeaderLogin()}
                {renderForm(props)}
            </View>
        </CCard>
    </View>
);

const getContainerProps = (containerState) => ({
    backgroundColor: containerState.backgroundColor,
    barColor: containerState.barColor,
    barType: containerState.barType,
    withOverlayLoading: containerState.withOverlayLoading,
    loadingText: containerState.loadingText,
});

const getContentProps = (primaryProps, hookContainer) => ({
    primaryProps,
    hookContainer,
});

const RenderLoginScreen = (props) => {
    const hookContainer = hookContainerState();
    const contentProps = getContentProps(props, hookContainer);
    return (
        <Container scrollView {...getContainerProps(hookContainer.containerState)}>
            {renderImageHeader()}
            {renderBodyContent(contentProps)}
            <VersionText />
        </Container>
    );
};

export default RenderLoginScreen;
