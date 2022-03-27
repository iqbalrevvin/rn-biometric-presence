import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Overlay, Text } from 'react-native-elements';
import { Colors } from '../../../Utility';
import styles from './CLoadingOverlay.style';
import Configs from './CLoadingOverlay.config';
import CGap from '../../CGap';

const CLoadingOverlay = ({ loadingText }) => (
    <Overlay overlayStyle={styles.contentOverlay} backdropStyle={styles.backdropOverlay}>
        <View style={styles.contentLoading}>
            <ActivityIndicator size={'large'} color={Colors.accent5} />
            <CGap />
            { loadingText && (
                <Text style={styles.text}>{loadingText}</Text>
            )}
        </View>
    </Overlay>
);

CLoadingOverlay.propTypes = Configs.propTypes;

export default CLoadingOverlay;
