import PropTypes from 'prop-types';

const defaultProps = {
    loading: false,
    disabled: false,
    title: 'Button Regular',
    icon: null,
    type: 'solid',
    color: null,
};

const propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.any,
    type: PropTypes.string,
    color: PropTypes.string,
};

export default { defaultProps, propTypes };
