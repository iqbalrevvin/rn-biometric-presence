import PropTypes from 'prop-types';

const defaultProps = {
    bold: false,
    size: 13,
};

const propTypes = {
    children: PropTypes.any,
    style: PropTypes.any,
    bold: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};

export default { defaultProps, propTypes };
