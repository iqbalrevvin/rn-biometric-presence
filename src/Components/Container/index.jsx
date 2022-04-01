import React, { Fragment } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Container.styles';
import CLoadingOverlay from '../Loadings/CLoadingOverlay';

const Container = ({
    children,
    style,
    backgroundColor,
    withOverlayLoading,
    loadingText,
    barColor,
    barType,
    scrollView,
}) => {
    const renderContent = () => {
        if (scrollView) return <ScrollView>{children}</ScrollView>;
        return children;
    };
    return (
        <Fragment>
            <StatusBar backgroundColor={barColor} barStyle={barType} />
            <View style={[style, styles.container(backgroundColor)]}>
                {withOverlayLoading && <CLoadingOverlay loadingText={loadingText} />}
                {renderContent()}
            </View>
        </Fragment>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.any,
    backgroundColor: PropTypes.string,
    withOverlayLoading: PropTypes.bool,
    loadingText: PropTypes.string,
    barColor: PropTypes.string,
    barType: PropTypes.string,
    scrollView: PropTypes.bool,
};

Container.defaultProps = {
    backgroundColor: 'white',
    withOverlayLoading: false,
    loadingText: 'Loading...',
    barColor: 'white',
    barType: 'dark-content',
    scrollView: false,
};
