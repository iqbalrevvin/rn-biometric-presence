import React from 'react';
import { Text } from 'react-native-elements';
import styles from './CText.style';
import Configs from './CText.config';

const CText = ({
    children, style, bold, color, size, numberOfLine,
}) => (
    <Text
        style={[style, styles.textSection(bold, color, size)]}
        numberOfLines={numberOfLine}>
        {children}
    </Text>
);

CText.propTypes = Configs.propTypes;
CText.defaultProps = Configs.defaultProps;

export default React.memo(CText);
