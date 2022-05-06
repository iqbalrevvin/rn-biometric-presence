import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Container from '~Components/Container';
import {
  ContainerState,
  HookContainerState,
} from '~Components/Container/Container.type';
import {Colors} from '~Utility';
import {HookLocationState, LocationState, Props} from './PresenceScreen.type';
import styles from './PresenceScreen.styles';
import CMapsView from '~Components/CMapsView';
import Geolocation from '@react-native-community/geolocation';

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
      error => Alert.alert('Error', JSON.stringify(error)),
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
    <Container
      scrollView
      {...getContainerProps(props, hookContainer.containerState)}>
      <View style={styles.contentContainer}>
        {_renderMapsView(location)}
      </View>
    </Container>
  );
};

export default PresenceScreenComponent;
