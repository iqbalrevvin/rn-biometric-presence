import React from 'react';
import {View} from 'react-native';
import styles from './CMapsView.styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Props} from './CMapsView.types';

const _getInitialRegionDataObject = () => ({
    latitude: -6.8661547,
    longitude: 107.0446855,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
});

const _getRegionDataObject = (props: Props) => ({
    latitude: props.latitude,
    longitude: props.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
});

const CMapsView = (props: Props) => (
  <View style={styles.container}>
    <MapView showsUserLocation zoomTapEnabled
      zoomEnabled zoomControlEnabled
      minZoomLevel={10}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={_getInitialRegionDataObject()}
      region={_getRegionDataObject(props)}
    />
  </View>
);

export default CMapsView;
