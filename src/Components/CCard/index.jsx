import React from 'react';
import { Card } from 'react-native-elements';
import styles from './CCard.styles';
import Configs from './CCard.config';

const CCard = ({
 children, borderRadius, borderWidth, elevation,
}) => (
    <Card containerStyle={styles.container(borderRadius, borderWidth, elevation)}>
        {children}
    </Card>
);

CCard.defaultProps = Configs.defaultProps;
CCard.propTypes = Configs.propTypes;

export default CCard;
