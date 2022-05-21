import React from 'react';
import {View} from 'react-native';
import styles from './CMapsView.styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Props} from './CMapsView.types';

const _getInitialRegionDataObject = (props: Props) => ({
  latitude: props.latitude,
  longitude: props.longitude,
  latitudeDelta: 0.0022,
  longitudeDelta: 0.0021,
});

const _getRegionDataObject = (props: Props) => ({
    latitude: props.latitude,
    longitude: props.longitude,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0021,
});

const CMapsView = (props: Props) => (
  <View style={styles.container}>
    <MapView showsUserLocation zoomTapEnabled
      zoomEnabled zoomControlEnabled
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={_getInitialRegionDataObject(props)}
      region={_getRegionDataObject(props)}
    />
  </View>
);

export default CMapsView;
