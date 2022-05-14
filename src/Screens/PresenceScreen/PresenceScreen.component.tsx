import React, {useState} from 'react';
import {View, Alert, Image, TouchableOpacity} from 'react-native';
import Container from '~Components/Container';
import {
  ContainerState,
  HookContainerState,
} from '~Components/Container/Container.type';
import {Colors, Images} from '~Utility';
import {HookLocationState, LocationState, Props} from './PresenceScreen.type';
import styles from './PresenceScreen.styles';
import CMapsView from '~Components/CMapsView';
import Geolocation from '@react-native-community/geolocation';
import CText from '~Components/CText';
import CButtonRegular from '~Components/Buttons/CButtonRegular';
import CCard from '~Components/CCard';
import CGap from '~Components/CGap';

const useHookContainerState = (): HookContainerState => {
  const [containerState, setContainerState] = useState({
    backgroundColor: Colors.white,
    barColor: Colors.primary,
    barType: Colors.barLightStyle,
    withOverlayLoading: false,
    loadingText: '',
  });
  return {containerState, setContainerState};
};

const _useHookLocation = (): HookLocationState => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  return {location, setLocation};
};

const _getLocationEffect = (setLocation: any) => {
  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude: latitude,
          longitude: longitude,
        });
      },
      () => Alert.alert('Oops', 'Masalah dalam mengambil titik lokasi anda!'),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, [setLocation]);
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

const _renderTouchablePresence = (props: Props) => {
  const {logo1} = Images;
  return (
    <React.Fragment>
      <TouchableOpacity>
        <Image source={logo1} style={styles.biometricLogo} />
      </TouchableOpacity>
      <CText semiBold>
        Sentuh ikon sidik jari untuk memulai absen
      </CText>
    </React.Fragment>
  );
};

// eslint-disable-next-line max-lines-per-function
const _renderInfoCardAttendance = () => (
  <CCard elevation={2} borderRadius={5}>
      <CText semiBold size={11}>
        Pastikan perangkat anda mendukung biometrik sidik jari
      </CText>
      <CGap height={5} />
      <CText semiBold size={11}>
        Pastikan sidik jari anda sudah di konfigurasi di pengaturan perangkat
      </CText>
      <CGap height={5} />
      <CText semiBold size={11}>
        Pastikan ID Biometrik perangkat anda berhasil di daftarkan ke server
      </CText>
      <CGap height={5} />
      <CText semiBold size={11}>
        Pastikan login dengan akun anda sendiri di saat pendaftaran ID Biometrik perangkat
      </CText>
  </CCard>
);

const _renderContentPresence = (props: Props) => (
  <View>
    <View style={styles.contentPresenceTitle}>
      <CText bold size={18} color={Colors.grey700}>
        LIVE ATTENDANCE
      </CText>
      {_renderTouchablePresence(props)}
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

const _renderContent = (props: Props, location: LocationState) => (
  <React.Fragment>
    {_renderMapsView(location)}
    {_renderContentPresence(props)}
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
});

const PresenceScreenComponent = (props: Props) => {
  const hookContainer = useHookContainerState();
  const {location, setLocation} = _useHookLocation();
  _getLocationEffect(setLocation);
  return (
    <Container {...getContainerProps(props, hookContainer.containerState)}>
      <View style={styles.contentContainer}>
        {_renderContent(props, location)}
      </View>
      {_renderFooterButton()}
    </Container>
  );
};

export default PresenceScreenComponent;
