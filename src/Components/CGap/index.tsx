import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CGap = ({ width = 0, height = 5 }) => <View style={{ width, height }} />;

CGap.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

export default React.memo(CGap);
