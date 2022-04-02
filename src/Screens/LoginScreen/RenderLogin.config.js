import PropTypes from 'prop-types';

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

export default { defaultProps, propTypes };
