import PropTypes from 'prop-types';

const displayName = 'WelcomeScreen';

const defaultProps = {
    navigation: {},
};

const propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default {
    displayName,
    defaultProps,
    propTypes,
};
