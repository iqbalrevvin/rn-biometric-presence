import React from 'react';
import { Button } from 'react-native-elements';
import Configs from './CButtonRegular.config';
import styles from './CButtonRegular.style';

const CButtonRegular = ({
    loading, disabled, title, icon, type, color, style, titleSize, titleBold, onPress,
}) => (
    <Button
        icon={icon || null}
        title={title}
        loading={loading}
        disabled={disabled}
        type={type}
        buttonStyle={{ style, ...styles.container(color) }}
        titleStyle={styles.titleSection(titleSize, titleBold)}
        onPress={onPress}
    />
);

CButtonRegular.displayName = Configs.displayName;
CButtonRegular.propTypes = Configs.propTypes;

export default React.memo(CButtonRegular);
