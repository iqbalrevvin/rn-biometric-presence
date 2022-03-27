import PropTypes from 'prop-types';

const displayName = 'RenderWelcomeScreen';

const defaultProps = {
    direct: false,
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
