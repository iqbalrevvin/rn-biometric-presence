import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../Utility';
import CText from '../CText';
import styles from './VersionText.style';
import Configs from './VersionText.config';

const VersionText = ({ version }) => (
    <View style={styles.container}>
        <CText color={Colors.grey600} size={12}>
            App Version
        </CText>
        <CText color={Colors.grey600} size={12}>
            {version}
        </CText>
    </View>
);

export default React.memo(VersionText);

VersionText.defaultProps = Configs.defaultProps;
VersionText.propTypes = Configs.propTypes;
