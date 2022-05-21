import PropTypes from 'prop-types';

const defaultProps = {
    borderRadius: 0,
    borderWidth: 0,
    elevation: 0,
    loading: false,
};

const propTypes = {
    children: PropTypes.any,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    elevation: PropTypes.number,
    loading: PropTypes.bool,
};

export default { defaultProps, propTypes };
