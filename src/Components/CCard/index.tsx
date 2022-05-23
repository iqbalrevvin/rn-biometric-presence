import React from 'react';
import { Card, LinearProgress } from 'react-native-elements';
import { View } from 'react-native';
import styles from './CCard.styles';
import Configs from './CCard.config';
import { Colors } from '../../Utility';
import { Props } from './CCard.types';

const renderLiniarProgress = (borderRadius: number|any) => (
  <View style={styles.liniarProgressContainer}>
    <LinearProgress
      color={Colors.primary}
      style={styles.liniarProgressSection(borderRadius)}
    />
  </View>
);

const CCard = (props: Props) => {
  const { children, borderRadius, borderWidth, elevation, loading, style } = props;
  return (
    <Card containerStyle={[style, styles.container(borderRadius, borderWidth, elevation)]}>
      {loading && renderLiniarProgress(borderRadius)}
      {children}
    </Card>
  );
};

CCard.defaultProps = Configs.defaultProps;
CCard.propTypes = Configs.propTypes;

export default CCard;
