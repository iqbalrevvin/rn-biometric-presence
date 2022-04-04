/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Alert, Image, View } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CButtonRegular from '../../Components/Buttons/CButtonRegular';
import CCard from '../../Components/CCard';
import CInput from '../../Components/CInput';
import Container from '../../Components/Container';
import CText from '../../Components/CText';
import VersionText from '../../Components/VersionText';
import { Colors, Images, Screen } from '../../Utility';
import styles from './LoginScreen.styles';
import Configs from './RenderLogin.config';

const { inputNameConstant: { EMAIL, PASSWORD } } = Configs;

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
        name={EMAIL}
        label={'Username / Email'}
        placeholder={'yourmail@example.com'}
        leftIconName={'user'}
        autoCapitalize='none'
        rules={Configs.emailFormValidation}
    />
);

const renderInputPassword = () => (
    <CInput
        name={PASSWORD}
        label={'Password'}
        placeholder={'Secret Password'}
        leftIconName={'unlock'}
        autoCapitalize='none'
        isPassword={true}
        rules={Configs.passwordFormValidation}
    />
);

const submitAction = (props) => {
    const { containerState, setContainerstate } = props.hookContainer;
    const { navigation, setLogin } = props.primaryProps;
    if (props.formMethod.formState.isValid) {
        setContainerstate({
            ...containerState,
            withOverlayLoading: true,
            loadingText: 'Signing in...',
        });
        setTimeout(() => {
            navigation.replace(Screen.INDEX_SCREEN.name);
            setLogin('TokenTest123');
        }, 2000);
    }
};

const submitError = () => {
    Alert.alert('Error', 'Please check your input again!');
};

const renderButtonSubmit = (props) => (
    <CButtonRegular
        disabled={!props.formMethod.formState.isValid}
        titleBold
        title='LOGIN ACCOUNT'
        color={Colors.primary}
        onPress={() => props.formMethod.handleSubmit(submitAction(props), submitError)}
    />
);

const renderForm = (props) => (
    <View style={styles.formInputSection}>
        <FormProvider {...props.formMethod}>
            {renderInputEmail()}
            {renderInputPassword()}
        </FormProvider>
        <View style={styles.forgotPasswordSection}>
            <TouchableOpacity>
                <CText color={Colors.primary} size={14}>Forgot Password?</CText>
            </TouchableOpacity>
        </View>
        {renderButtonSubmit(props)}
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

const getContentProps = (primaryProps, hookContainer, formMethod) => ({
    primaryProps,
    hookContainer,
    formMethod,
});

const RenderLoginScreen = (props) => {
    const formMethods = useForm({ mode: 'onChange' });
    const hookContainer = hookContainerState();
    const contentProps = getContentProps(props, hookContainer, formMethods);
    return (
        <Container scrollView {...getContainerProps(hookContainer.containerState)}>
            {renderImageHeader()}
            {renderBodyContent(contentProps)}
            <VersionText />
        </Container>
    );
};

export default RenderLoginScreen;
