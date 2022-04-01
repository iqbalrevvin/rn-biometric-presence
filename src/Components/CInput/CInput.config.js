import PropTypes from 'prop-types';

const defaultProps = {
    label: 'Label Input',
    labelStyle: {},
    placeholder: '',
    value: '',
    styles: {},
    onChangeText: () => {},
    leftIconName: null,
    leftIconColor: 'darkgrey',
    errorMessage: null,
    autoCapitalize: null,
    isPassword: false,
    keyboardType: null,
    textContentType: null,
    autoCompleteType: null,
    rightIconName: null,
    rightIconColor: 'darkgrey',
};

const propTypes = {
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    styles: PropTypes.object,
    onChangeText: PropTypes.func,
    leftIconName: PropTypes.string,
    leftIconColor: PropTypes.string,
    errorMessage: PropTypes.string,
    autoCapitalize: PropTypes.string,
    isPassword: PropTypes.bool,
    keyboardType: PropTypes.string,
    textContentType: PropTypes.string,
    autoCompleteType: PropTypes.string,
    rightIconName: PropTypes.string,
    rightIconColor: PropTypes.string,
};

export default { defaultProps, propTypes };
