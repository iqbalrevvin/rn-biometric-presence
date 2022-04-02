/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Container.styles';
import CLoadingOverlay from '../Loadings/CLoadingOverlay';

const _renderContent = (scrollView, children) => {
    if (scrollView) return <ScrollView>{children}</ScrollView>;
    return children;
};

const Container = (props) => (
        <Fragment>
            <StatusBar animated={true} backgroundColor={props.barColor} barStyle={props.barType} />
            <View style={[props.style, styles.container(props.backgroundColor)]}>
                {props.withOverlayLoading && <CLoadingOverlay loadingText={props.loadingText} />}
                {_renderContent(props.scrollView, props.children)}
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
