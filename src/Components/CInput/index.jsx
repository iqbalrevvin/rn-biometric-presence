import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { Colors } from '../../Utility';
import styles from './CInput.styles';
import configs from './CInput.config';

const CInput = ({
    label,
    labelStyle,
    placeholder,
    value,
    style,
    onChangeText,
    leftIconName,
    leftIconColor,
    errorMessage,
    autoCapitalize,
    isPassword,
    keyboardType,
    textContentType,
    autoCompleteType,
    rightIconName,
    rightIconColor,
}) => {
    const [focus, setFocus] = useState(false);
    const [seePassword, setSeePassword] = useState(false);

    const onFocus = () => setFocus(true);
    const onBlur = () => setFocus(!!value);

    const handleIconColor = (isFocus) => {
        if (isFocus) return Colors.primary;
        if (errorMessage) return Colors.accent4;
        return leftIconColor;
    };

    const handleRightIconProps = (password, iconName, iconColor) => {
        if (!password) return { type: 'ant-design', name: iconName, color: iconColor };
        return {
            type: 'ant-design', name: seePassword ? 'eyeo' : 'eye', color: iconColor, onPress: () => setSeePassword(!seePassword),
        };
    };

    return (
        <Input
            label={label}
            placeholder={placeholder}
            leftIcon={leftIconName ? { type: 'ant-design', name: leftIconName, color: handleIconColor(focus) } : null}
            style={style}
            onChangeText={onChangeText}
            // value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            inputContainerStyle={styles.inputContainerStyle(focus, errorMessage)}
            inputStyle={{ color: Colors.grey700 }}
            labelStyle={labelStyle}
            errorMessage={errorMessage}
            errorStyle={{ color: Colors.accent4 }}
            autoCapitalize={autoCapitalize}
            secureTextEntry={seePassword ? false : isPassword}
            keyboardType={keyboardType}
            textContentType={textContentType}
            autoCompleteType={autoCompleteType}
            rightIcon={handleRightIconProps(isPassword, rightIconName, rightIconColor)}
        />
    );
};

CInput.defaultProps = configs.defaultProps;
CInput.propTypes = configs.propTypes;

export default CInput;
