import React, { Fragment } from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Container.styles';
import CLoadingOverlay from '../Loadings/CLoadingOverlay';

const Container = ({
    children, style, backgroundColor, withOverlayLoading, loadingText, barColor, barType,
}) => (
    <Fragment>
        <StatusBar backgroundColor={barColor} barStyle={barType} />
        <View style={[style, styles.container(backgroundColor)]}>
            { withOverlayLoading && <CLoadingOverlay loadingText={loadingText} /> }
            {children}
        </View>
    </Fragment>
);

export default Container;

Container.propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.any,
    backgroundColor: PropTypes.string,
    withOverlayLoading: PropTypes.bool,
    loadingText: PropTypes.string,
    barColor: PropTypes.string,
    barType: PropTypes.string,
};

Container.defaultProps = {
    backgroundColor: 'white',
    withOverlayLoading: false,
    loadingText: 'Loading...',
    barColor: 'white',
    barType: 'dark-content',
};
