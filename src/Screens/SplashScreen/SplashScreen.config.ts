import PropTypes from 'prop-types';

const displayName = 'Splash Screen';

const defaultProps = {
    navigation: {},
    loggedIn: false,
    token: null,
    setLogin: () => {},
};

const propTypes = {
    navigation: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    token: PropTypes.string,
    setLogin: PropTypes.func.isRequired,
};

export default {
    displayName,
    defaultProps,
    propTypes,
};
