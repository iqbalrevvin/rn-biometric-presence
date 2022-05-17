import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Colors } from '../../../Utility';
import styles from './CLoadingOverlay.style';
import Configs from './CLoadingOverlay.config';
import CGap from '../../CGap';
import CText from '../../CText';

interface CLoadingOverlayProps {
    loadingText?: string;
}

const CLoadingOverlay = ({ loadingText }: CLoadingOverlayProps) => (
  <Overlay isVisible overlayStyle={styles.contentOverlay} backdropStyle={styles.backdropOverlay}>
    <View style={styles.contentLoading}>
      <ActivityIndicator size={'large'} color={Colors.accent5} />
      <CGap />
      { loadingText && (
        <CText semiBold size={15}>{loadingText}</CText>
      )}
    </View>
  </Overlay>
);

CLoadingOverlay.propTypes = Configs.propTypes;

export default CLoadingOverlay;
