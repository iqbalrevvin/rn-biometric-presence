import React from 'react';
import { Text } from 'react-native-elements';
import styles from './CText.style';
import Configs from './CText.config';
import { CTextProps } from './CText.type';

const CText = ({
    children, style, bold, semiBold, color, size, numberOfLine,
}: CTextProps) => (
    <Text
        style={[style, styles.textSection(bold, semiBold, color, size)]}
        numberOfLines={numberOfLine}>
        {children}
    </Text>
);

CText.propTypes = Configs.propTypes;
CText.defaultProps = Configs.defaultProps;

export default React.memo(CText);
