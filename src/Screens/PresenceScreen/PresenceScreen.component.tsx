import React, {useState} from 'react';
import {View, Alert, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import Container from '~Components/Container';
import {
  ContainerState,
  HookContainerState,
} from '~Components/Container/Container.type';
import {Colors, Images} from '~Utility';
import {
  BiometricProps,
  HookBiometricState,
  HookLocationState,
  LocationState,
  Props,
} from './PresenceScreen.type';
import styles from './PresenceScreen.styles';
import CMapsView from '~Components/CMapsView';
import Geolocation from '@react-native-community/geolocation';
import CText from '~Components/CText';
import CButtonRegular from '~Components/Buttons/CButtonRegular';
import CCard from '~Components/CCard';
import CGap from '~Components/CGap';
import { scaleFont, scaleHeight } from '~Utility/Size';
import presenceConstant from './PresenceScreen.constant';
import { getAndroidIdSync, getBrand, getDeviceNameSync } from 'react-native-device-info';

const {
  TEXT: {
    ATTENDANCE_TITLE, SUCCESS, ERROR, ON_REGISTER_BIOMETRIC, FAILED_CONFIG,
    ERROR_GET_BIOMETRIC_ID, REGIS_BIOMETRIC_SUCCESS, REGIS_BIOMETRIC_FAILED,
    INFO_DESCRIPTION, MAPS_LOADING, BIOMETRIC_NO_SUPPORT, DELETE_DEVICE_KEY,
    CLOCK_IN, CLOCK_OUT,
  },
} = presenceConstant;

const useHookContainerState = (): HookContainerState => {
  const [containerState, setContainerState] = useState({
    backgroundColor: Colors.white,
    barColor: Colors.primary,
    barType: Colors.barLightStyle,
    showToast: false,
    toastSww: false,
    toastTopOffset: scaleHeight(24),
    toastType: 'error',
    toastTitle: 'Title',
    toastSubTitle: 'Subtitle',
  });
  return {containerState, setContainerState};
};

const _useShowToastHideEffect = (hookContainer: HookContainerState) => {
  const { containerState, setContainerState } = hookContainer;
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

const _showToastHandle = (
  biometricProps: BiometricProps, toastType: string, title:string, subTitle: string
) => {
  const { containerState, setContainerState } = biometricProps.hookContainer;
  setContainerState({
      ...containerState,
      showToast: true,
      toastType,
      toastTitle: title,
      toastSubTitle: subTitle,
  });
};

const _toastSwwHandle = (biometricProps: BiometricProps) => {
  const { containerState, setContainerState } = biometricProps.hookContainer;
  setContainerState({
      ...containerState,
      showToast: true,
      toastSww: true,
  });
};

const _useHookBiometricSupport = (): HookBiometricState => {
  const [isBiometricSupport, setIsBiometricSupport] = useState(true);
  return {isBiometricSupport, setIsBiometricSupport};
};

const _useHookLocation = (): HookLocationState => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  return {location, setLocation};
};

const _getLocationEffect = (props: Props, setLocation: any) => {
  Geolocation.getCurrentPosition(
    position => {
      const {latitude, longitude} = position.coords;
      setLocation({ latitude: latitude, longitude: longitude });
    },
    () => {
      Alert.alert('Oops', 'Masalah dalam mengambil titik lokasi anda!');
      props.navigation.goBack();
    },
    {enableHighAccuracy: false, timeout: 20000, maximumAge: 2500},
  );
};

const _handleChecKey = () => {
  const checkKeyPromise = new Promise((resolve, reject) => {
    ReactNativeBiometrics.biometricKeysExist().then(resultObject => {
      const { keysExist } = resultObject;
        if (keysExist) {
            reject('Sorry, Keys exists');
        } else {
            resolve('Keys Not Exists, Successfully Register');
        }
    });
  });
  return checkKeyPromise;
};

const _handleDeleteKey = () => {
  console.log('_handleDeleteKey');
  ReactNativeBiometrics.deleteKeys()
  .then((resultObject) => {
      const { keysDeleted } = resultObject;
      if (keysDeleted) {
          console.log('Successful delete key');
      } else {
          console.log('Unsuccessful deletion because there were no keys to delete');
      }
  });
};

// eslint-disable-next-line max-lines-per-function
const _handlResponseBiometric = (biometricProps: BiometricProps, publicKey: string, response: any) => {
  const { setBiometricIdDispatch, navigation } = biometricProps.primaryProps;
  const { setLocation } = biometricProps.hookLocation;
  if (response?.data){
    if (response?.data?.success){
      _showToastHandle(biometricProps, SUCCESS, REGIS_BIOMETRIC_SUCCESS, response?.data?.message);
      setBiometricIdDispatch(publicKey);
      _getLocationEffect(biometricProps.primaryProps, setLocation);
    } else {
      _showToastHandle(biometricProps, ERROR, REGIS_BIOMETRIC_FAILED, response?.data?.message);
      _handleDeleteKey(); setTimeout(() => navigation.goBack(), 250);
    }
  } else {
    _toastSwwHandle(biometricProps);
    _handleDeleteKey();
    setTimeout(() => navigation.goBack(), 250);
  }
};

const _sendBiometricIdToServer = async (biometricProps: BiometricProps, publicKey: string) => {
  console.log('_sendBiometricIdToServer', 'Send biometric to server');
  const payload = {
    biometric_id: publicKey,
    device_id: getAndroidIdSync(),
    device_name: `${getBrand()} - ${getDeviceNameSync()}`,
  };
  const { hitSaveBiometricIdMutation, setLoadingPage} = biometricProps.primaryProps;
  const response = await hitSaveBiometricIdMutation.mutateAsync(payload);
  await _handlResponseBiometric(biometricProps, publicKey, response);
  setLoadingPage(false, 'close');
};

const _handleCreateKeys = (biometricProps: BiometricProps) => {
  const { setLoadingPage } = biometricProps.primaryProps;
  console.log('_handleCreateKeys', 'handle create keys');
  ReactNativeBiometrics.createKeys()
  .then((resultObject) => {
      const { publicKey } = resultObject;
      _sendBiometricIdToServer(biometricProps, publicKey);
  }).catch(error => {
      setLoadingPage(true, 'close');
      Alert.alert(FAILED_CONFIG, ERROR_GET_BIOMETRIC_ID);
      console.log('Create Keys Error: ' + error);
  });
};

const _handleBiometricSupport = (biometricProps: BiometricProps) => {
  const { setLoadingPage } = biometricProps.primaryProps;
  const { setLocation } = biometricProps.hookLocation;
  _handleChecKey().then(() => {
    setLoadingPage(true, ON_REGISTER_BIOMETRIC);
    setTimeout(() => _handleCreateKeys(biometricProps), 500);
    console.log('_handleBiometricSupport', 'Key Not Exists, next get key & save biometric id to server');
  }).catch(error => {
    _getLocationEffect(biometricProps.primaryProps, setLocation);
    console.log('PresenceScreen._handleBiometricSupport', error);
  });
};

const _registerBiometricEffect = (biometricProps: BiometricProps) => {
  React.useEffect(() => {
    ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
      const { available, biometryType } = resultObject;
      switch (true) {
        case available && biometryType === ReactNativeBiometrics.Biometrics:
          _handleBiometricSupport(biometricProps);
        break;
        default:
          biometricProps.hookBiometric.setIsBiometricSupport(false);
        break;
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
};

const _getTitleHeader = (type: string) => {
  switch (type) {
    case 'ClockIn':
      return 'Clock In';
    case 'ClockOut':
      return 'Clock Out';
    default:
      return 'Presence';
  }
};

const _renderMapsView = (location: LocationState) => (
  <View style={styles.mapViewContainer}>
    <CMapsView latitude={location.latitude} longitude={location.longitude} />
  </View>
);

const _renderMapLoading = (isBiometricSupport: Boolean) => (
  <React.Fragment>
    {isBiometricSupport && (
      <View style={styles.mapViewContainer}>
        <View style={styles.loadingMapContainer}>
          <CGap height={50} />
          <ActivityIndicator size={'large'} color={Colors.accent5} />
          <CGap height={15} />
          <CText semiBold>{MAPS_LOADING}</CText>
        </View>
      </View>
    )}
  </React.Fragment>
);

const _handleTouchFingerPrint = (props: Props) => {
  const paramName = props.route.params.type === 'ClockIn' ? CLOCK_IN : CLOCK_OUT;
  ReactNativeBiometrics.createSignature({
    promptMessage: `${paramName}\nTempelkan jari ke sensor`,
    payload: 'payload data',
  }).then((resultObject) => {
      const { success, signature } = resultObject;
      if (success) {
          console.log('_handleHitBiometric', signature);
      }
  }).catch(err => console.log('_handleHitBiometric', err));
};

const _renderIconBiometricTrue = (props: Props, location: LocationState, logo1: any) => (
  <React.Fragment>
    <TouchableOpacity onPress={() => _handleTouchFingerPrint(props)}>
      {location.latitude !== 0 && <Image source={logo1} style={styles.biometricLogo} />}
    </TouchableOpacity>
    <CText semiBold>
      {location.latitude !== 0 && 'Sentuh ikon sidik jari untuk memulai absen'}
      {location.latitude === 0 && 'Sedang Memuat Peta'}
    </CText>
  </React.Fragment>
);

const _renderBiometricFalse = (deniedImage: any) => (
  <React.Fragment>
    <View>
      <Image source={deniedImage} style={styles.biometricLogo} />
    </View>
    <CGap height={5} />
    <CText semiBold color={Colors.accent4}>
      {BIOMETRIC_NO_SUPPORT}
    </CText>
  </React.Fragment>
);

const _renderTouchablePresence = (props: Props, location: LocationState, isBiometricSupport: boolean) => {
  const {logo1, deniedImage} = Images;
  return (
    <React.Fragment>
      {
        isBiometricSupport ?
        _renderIconBiometricTrue(props, location, logo1) :
        _renderBiometricFalse(deniedImage)
      }
    </React.Fragment>
  );
};

const _renderInfoCardAttendance = () => (
  <CCard elevation={2} borderRadius={5}>
      <CText semiBold size={scaleFont(11)}>{INFO_DESCRIPTION.INFO_1}</CText>
      <CGap height={5} />
      <CText semiBold size={scaleFont(11)}>{INFO_DESCRIPTION.INFO_2}</CText>
      <CGap height={5} />
      <CText semiBold size={scaleFont(11)}>{INFO_DESCRIPTION.INFO_3}</CText>
      <CGap height={5} />
      <CText semiBold size={scaleFont(11)}>{INFO_DESCRIPTION.INFO_4}</CText>
  </CCard>
);

const _renderContentPresence = (props: Props, location: LocationState, isBiometricSupport: boolean) => (
  <View>
    <View style={styles.contentPresenceTitle}>
      <CText bold size={18} color={Colors.grey700}>
        {ATTENDANCE_TITLE}
      </CText>
      {_renderTouchablePresence(props, location, isBiometricSupport)}
      {_renderInfoCardAttendance()}
    </View>
  </View>
);

const _renderFooterButton = () => (
  <View style={styles.buttonFooterContainer}>
    <CButtonRegular
      titleBold
      title={DELETE_DEVICE_KEY}
      color={Colors.accent4}
    />
  </View>
);

const _renderContent = (props: Props, location: LocationState, isBiometricSupport: boolean) => (
  <React.Fragment>
    {
      location.latitude !== 0 ?
      _renderMapsView(location) :
      _renderMapLoading(isBiometricSupport)
    }
    {_renderContentPresence(props, location, isBiometricSupport)}
  </React.Fragment>
);

const getContainerProps = (props: Props, containerState: ContainerState) => ({
  backgroundColor: containerState.backgroundColor,
  barColor: containerState.barColor,
  barType: containerState.barType,
  withOverlayLoading: props.loadingPage,
  loadingText: props.loadingPageText,
  headerTitle: _getTitleHeader(props.route.params.type),
  headerLeftIconOnPress: props.navigation.goBack,
  showToast: containerState.showToast,
  toastSww: containerState.toastSww,
  toastTopOffset: containerState.toastTopOffset,
  toastType: containerState.toastType,
  toastTitle: containerState.toastTitle,
  toastSubTitle: containerState.toastSubTitle,
});

const _setBiometricProps = (
  props: Props, hookContainer: HookContainerState,
  useHookBiometricSupport: HookBiometricState,
  hookLocation: HookLocationState
) => ({
  primaryProps: props,
  hookContainer,
  hookBiometric: useHookBiometricSupport,
  hookLocation,
});

// eslint-disable-next-line max-lines-per-function
const PresenceScreenComponent = (props: Props) => {
  const hookContainer = useHookContainerState();
  const hookLocation = _useHookLocation();
  const hookBiometricSupport = _useHookBiometricSupport();
  const biometricProps = _setBiometricProps(props, hookContainer, hookBiometricSupport, hookLocation);
  _registerBiometricEffect(biometricProps);
  _useShowToastHideEffect(hookContainer);
  return (
    <Container {...getContainerProps(props, hookContainer.containerState)}>
      <View style={styles.contentContainer}>
        {_renderContent(props, hookLocation.location, hookBiometricSupport.isBiometricSupport)}
      </View>
      {_renderFooterButton()}
    </Container>
  );
};

export default PresenceScreenComponent;
