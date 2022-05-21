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

const {
  TEXT: {
    ATTENDANCE_TITLE, SUCCESS, ERROR, ON_REGISTER_BIOMETRIC, FAILED_CONFIG,
    ERROR_GET_BIOMETRIC_ID, REGIS_BIOMETRIC_SUCCESS, REGIS_BIOMETRIC_FAILED,
    INFO_DESCRIPTION, MAPS_LOADING, BIOMETRIC_NO_SUPPORT,
  },
} = presenceConstant;

const useHookContainerState = (): HookContainerState => {
  const [containerState, setContainerState] = useState({
    backgroundColor: Colors.white, barColor: Colors.primary,
    barType: Colors.barLightStyle, withOverlayLoading: false,
    loadingText: 'Loading', showToast: false, toastSww: false,
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

const _handleLoadingOverlay = (
  hookContainer: HookContainerState,
  isActive: boolean,
  loadingText: string
) => {
  const {containerState, setContainerState} = hookContainer;
  setTimeout(() => {
    setContainerState({
      ...containerState,
      withOverlayLoading: isActive,
      loadingText,
    });
  }, 500);
};

const _getLocationEffect = (props: Props, setLocation: any) => {
  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({ latitude: latitude, longitude: longitude });
      },
      () => {
        Alert.alert('Oops', 'Masalah dalam mengambil titik lokasi anda!');
        props.navigation.goBack();
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setLocation]);
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

const _handlResponseBiometric = (biometricProps: BiometricProps, publicKey: string, response: any) => {
  const { setBiometricIdDispatch, navigation } = biometricProps.primaryProps;
  if (response?.data){
    if (response?.data?.success){
      _showToastHandle(biometricProps, SUCCESS, REGIS_BIOMETRIC_SUCCESS, response?.data?.message);
      setBiometricIdDispatch(publicKey);
    } else {
      _showToastHandle(biometricProps, ERROR, REGIS_BIOMETRIC_FAILED, response?.data?.message);
      setTimeout(() => navigation.goBack(), 250);
    }
  } else {
    _toastSwwHandle(biometricProps);
    setTimeout(() => navigation.goBack(), 500);
  }
};

const _sendBiometricIdToServer = async (biometricProps: BiometricProps, publicKey: string) => {
  console.log('send biometric server');
  const { hitSaveBiometricIdMutation} = biometricProps.primaryProps;
  const response = await hitSaveBiometricIdMutation.mutateAsync(publicKey);
  await _handlResponseBiometric(biometricProps, publicKey, response);
  _handleLoadingOverlay(biometricProps.hookContainer, false, 'close');
};

const _handleCreateKeys = (biometricProps: BiometricProps) => {
  console.log('handle create keys');
  _handleLoadingOverlay(biometricProps.hookContainer, true, ON_REGISTER_BIOMETRIC);
  ReactNativeBiometrics.createKeys()
  .then((resultObject) => {
      const { publicKey } = resultObject;
      setTimeout(() => {
        _sendBiometricIdToServer(biometricProps, publicKey);
      },1000);
  }).catch(error => {
      _handleLoadingOverlay(biometricProps.hookContainer, false, 'close');
      Alert.alert(FAILED_CONFIG, ERROR_GET_BIOMETRIC_ID);
      console.log('Create Keys Error: ' + error);
  });
};

const _handleBiometricSupport = (biometricProps: BiometricProps) => {
  _handleChecKey().then(() => {
    console.log('Key Not Exists, next get key & save biometric id to server');
    _handleCreateKeys(biometricProps);
  }).catch(error => {
    _handleLoadingOverlay(biometricProps.hookContainer, false, 'close');
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
    case 'clockIn':
      return 'Clock In';
    case 'clockOut':
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

const _renderMapLoading = () => (
  <View style={styles.mapViewContainer}>
    <View style={styles.loadingMapContainer}>
      <CGap height={50} />
      <ActivityIndicator size={'large'} color={Colors.accent5} />
      <CGap height={15} />
      <CText semiBold>{MAPS_LOADING}</CText>
    </View>
  </View>
);

const _renderIconBiometricTrue = (props: Props, location: LocationState, logo1: any) => (
  <React.Fragment>
    <TouchableOpacity>
      {location.latitude !== 0 && <Image source={logo1} style={styles.biometricLogo} />}
    </TouchableOpacity>
    <CText semiBold>
    {location.latitude !== 0 && 'Sentuh ikon sidik jari untuk memulai absen'}
    {location.latitude === 0 && 'Sedang memuat peta...'}
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
      title={'HAPUS KUNCI PERANGKAT'}
      color={Colors.accent4}
    />
  </View>
);

const _renderContent = (props: Props, location: LocationState, isBiometricSupport: boolean) => (
  <React.Fragment>
    {location.latitude !== 0 ? _renderMapsView(location) : _renderMapLoading()}
    {_renderContentPresence(props, location, isBiometricSupport)}
  </React.Fragment>
);

const getContainerProps = (props: Props, containerState: ContainerState) => ({
  backgroundColor: containerState.backgroundColor,
  barColor: containerState.barColor,
  barType: containerState.barType,
  withOverlayLoading: containerState.withOverlayLoading,
  loadingText: containerState.loadingText,
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
  useHookBiometricSupport: HookBiometricState
) => ({
  primaryProps: props,
  hookContainer,
  hookBiometric: useHookBiometricSupport,
});

// eslint-disable-next-line max-lines-per-function
const PresenceScreenComponent = (props: Props) => {
  const hookContainer = useHookContainerState();
  const {location, setLocation} = _useHookLocation();
  const hookBiometricSupport = _useHookBiometricSupport();
  const biometricProps = _setBiometricProps(props, hookContainer, hookBiometricSupport);
  _registerBiometricEffect(biometricProps);
  _getLocationEffect(props, setLocation);
  _useShowToastHideEffect(hookContainer);
  return (
    <Container {...getContainerProps(props, hookContainer.containerState)}>
      <View style={styles.contentContainer}>
        {_renderContent(props, location, hookBiometricSupport.isBiometricSupport)}
      </View>
      {_renderFooterButton()}
    </Container>
  );
};

export default PresenceScreenComponent;
