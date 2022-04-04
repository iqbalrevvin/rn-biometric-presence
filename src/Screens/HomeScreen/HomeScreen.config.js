import PropTypes from 'prop-types';

const displayName = 'Home Screen';

const defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

export default {
    displayName,
    defaultProps,
    propTypes,
};
