import React from 'react';
import { Card, LinearProgress } from 'react-native-elements';
import { View } from 'react-native';
import styles from './CCard.styles';
import Configs from './CCard.config';
import { Colors } from '../../Utility';

const renderLiniarProgress = (borderRadius) => (
    <View style={styles.liniarProgressContainer}>
        <LinearProgress
            color={Colors.primary}
            style={styles.liniarProgressSection(borderRadius)}
        />
    </View>
);

const CCard = ({
    children, borderRadius, borderWidth, elevation, loading,
}) => (
    <Card containerStyle={styles.container(borderRadius, borderWidth, elevation)}>
        {loading && renderLiniarProgress(borderRadius)}
        {children}
    </Card>
);

CCard.defaultProps = Configs.defaultProps;
CCard.propTypes = Configs.propTypes;

export default CCard;
