import PropTypes from 'prop-types';

const defaultProps = {
    key: null,
    withDivider: false,
    title: 'Title List Item',
    subtitle: null,
    withArrow: false,
    onPress: () => {},
};

const propTypes = {
    key: PropTypes.any,
    withDivider: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    withArrow: PropTypes.bool,
    onPress: PropTypes.func,
};

export default { defaultProps, propTypes };
