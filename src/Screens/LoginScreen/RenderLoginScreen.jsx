
import React from 'react';
import { Alert, Image, View } from 'react-native';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
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
import { get } from 'lodash';

const { inputNameConstant: { EMAIL, PASSWORD } } = Configs;

const useHookContainerState = () => {
    const [containerState, setContainerState] = React.useState({
        backgroundColor: Colors.white,
        barColor: Colors.primary,
        barType: Colors.barLightStyle,
        showToast: false,
        toastSww: false,
        toastType: null,
        toastTitle: null,
        toastSubTitle: null,
    });
    return { containerState, setContainerState };
};

const useShowToastHideEffect = (containerState, setContainerState) => {
    React.useEffect(() => {
        setTimeout(() => {
            setContainerState({
                ...containerState,
                showToast: false,
            });
        }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerState.showToast]);
};

const showToastHandle = (props, toastType, title, subTitle) => {
    const { containerState, setContainerState } = props.hookContainer;
    setContainerState({
        ...containerState,
        showToast: true,
        toastType,
        toastTitle: title,
        toastSubTitle: subTitle,
    });
};

const toastSwwHandle = (props) => {
    const { containerState, setContainerState } = props.hookContainer;
    setContainerState({
        ...containerState,
        showToast: true,
        toastSww: true,
    });
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

const disableInputHandler = (props) => {
    const { primaryProps } = props;
    return primaryProps.loadingPage;
};

const renderInputEmail = (props) => (
  <CInput
    name={EMAIL}
    label={'Username / Email'}
    placeholder={'yourmail@example.com'}
    leftIconName={'user'}
    autoCapitalize="none"
    rules={Configs.emailFormValidation}
    disabled={disableInputHandler(props)}
    />
);

const renderInputPassword = (props) => (
  <CInput
    name={PASSWORD}
    label={'Password'}
    placeholder={'Secret Password'}
    leftIconName={'unlock'}
    autoCapitalize="none"
    isPassword={true}
    rules={Configs.passwordFormValidation}
    disabled={disableInputHandler(props)}
    />
);

const _processSubmit = async (props) => {
    const { navigation, setLoadingPage, loginMutation, setLogin } = props.primaryProps;
    const response = await loginMutation.mutateAsync(props.watchedValue);
    setLoadingPage(false, null);
    if (response?.data) {
        if (response?.data?.success) {
          const token = get(response, 'data.output_data.token', null);
          setLogin(token);
          navigation.replace(Screen.INDEX_SCREEN.name);
        }
        else showToastHandle(props, 'error', 'Login Gagal', response?.data?.message);
    } else {
        toastSwwHandle(props);
    }
};

const submitAction = async (props) => {
    const { setLoadingPage } = props.primaryProps;
    if (props.formMethod.formState.isValid) {
        setLoadingPage(true, 'Signing in...');
        _processSubmit(props);
    }
};

const submitError = () => {
    Alert.alert('Error', 'Please check your input again!');
};

const disableButtonHandler = (props) => {
    const { primaryProps, formMethod } = props;
    return !formMethod.formState.isValid || primaryProps.loadingPage;
};

const renderButtonSubmit = (props) => (
  <CButtonRegular
    disabled={disableButtonHandler(props)}
    titleBold
    title="LOGIN ACCOUNT"
    color={Colors.primary}
    onPress={() => props.formMethod.handleSubmit(submitAction(props), submitError)}
    />
);

const renderForm = (props) => (
  <View style={styles.formInputSection}>
    <FormProvider {...props.formMethod}>
      {renderInputEmail(props)}
      {renderInputPassword(props)}
    </FormProvider>
    <View style={styles.forgotPasswordSection}>
      <TouchableOpacity>
        <CText color={Colors.primary} size={14}>Forgot Password?</CText>
      </TouchableOpacity>
    </View>
    {renderButtonSubmit(props)}
  </View>
);

const renderBodyContent = (props) => {
    const { primaryProps: { loadingPage } } = props;
    return (
      <View style={styles.formContainer}>
        <CCard borderRadius={5} elevation={2} loading={loadingPage}>
          <View style={styles.formSection}>
            {renderHeaderLogin()}
            {renderForm(props)}
          </View>
        </CCard>
      </View>
    );
};

const fieldWatchedValue = (watch) => ({
    [EMAIL]: watch[0],
    [PASSWORD]: watch[1],
});

const _initiateForm = () => {
    const formOptions = { mode: 'onChange' };
    const formMethods = useForm(formOptions);
    const watch = useWatch({
        control: formMethods.control,
        name: [EMAIL, PASSWORD],
    });
    const watchedValue = fieldWatchedValue(watch);
    return { watchedValue, formMethods };
};

const getContainerProps = (_props, containerState) => ({
    backgroundColor: containerState.backgroundColor,
    barColor: containerState.barColor,
    barType: containerState.barType,
    showToast: containerState.showToast,
    toastSww: containerState.toastSww,
    toastType: containerState.toastType,
    toastTitle: containerState.toastTitle,
    toastSubTitle: containerState.toastSubTitle,
});

const getContentProps = (primaryProps, hookContainer, watchedValue, formMethod) => ({
    primaryProps,
    hookContainer,
    watchedValue,
    formMethod,
});

const RenderLoginScreen = (props) => {
    const { watchedValue, formMethods } = _initiateForm();
    const hookContainer = useHookContainerState();
    const contentProps = getContentProps(props, hookContainer, watchedValue, formMethods);
    useShowToastHideEffect(hookContainer.containerState, hookContainer.setContainerState);
    return (
      <Container scrollView {...getContainerProps(props, hookContainer.containerState)}>
        {renderImageHeader()}
        {renderBodyContent(contentProps)}
        <VersionText />
      </Container>
    );
};

export default RenderLoginScreen;
