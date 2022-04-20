/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import {
    useController,
    useFormContext,
} from 'react-hook-form';
import { Colors } from '../../Utility';
import styles from './CInput.styles';
import configs from './CInput.config';

const CInput = ({
    label,
    labelStyle,
    placeholder,
    value,
    style,
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
    name,
    rules,
    defaultValue,
    disabled,
}) => {
    const [focus, setFocus] = useState(false);
    const [seePassword, setSeePassword] = useState(false);

    const onFocus = () => setFocus(true);

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

    const formContext = useFormContext();
    const { formState } = formContext;

    if (!formContext || !name) {
        const msg = !formContext ? 'TextInput must be wrapped by the FormProvider' : 'Name must be defined';
        console.error(msg);
        return null;
    }

    const { field } = useController({ name, rules, defaultValue });

    const handleOnBlur = () => {
        if (field.onBlur) {
            field.onBlur();
            setFocus(!!value);
        } else {
            setFocus(!!value);
        }
    };

    const hasError = Boolean(formState?.errors[name]);

    return (
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        leftIcon={leftIconName ? { type: 'ant-design', name: leftIconName, color: handleIconColor(focus) } : null}
        style={style}
        onChangeText={field.onChange}
        defaultValue={defaultValue}
        value={field.value}
        onFocus={onFocus}
        onBlur={handleOnBlur}
        inputContainerStyle={styles.inputContainerStyle(focus, errorMessage)}
        inputStyle={styles.inputStyle}
        labelStyle={[styles.labelStyle, labelStyle]}
        errorMessage={hasError && formState.errors[name].message}
        errorStyle={{ color: Colors.accent4 }}
        autoCapitalize={autoCapitalize}
        secureTextEntry={seePassword ? false : isPassword}
        keyboardType={keyboardType}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
        rightIcon={handleRightIconProps(isPassword, rightIconName, rightIconColor)}
        rules={rules}
        disabled={disabled}
        />
    );
};

CInput.defaultProps = configs.defaultProps;
CInput.propTypes = configs.propTypes;

export default CInput;
