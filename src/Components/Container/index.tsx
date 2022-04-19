/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { Fragment, ReactNode } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import Toast from 'react-native-toast-message';
import styles from './Container.styles';
import CLoadingOverlay from '../Loadings/CLoadingOverlay';
import { ContainerProps } from './Container.type';

const _renderContent = (scrollView: any, children: ReactNode) => {
    if (scrollView) return <ScrollView>{children}</ScrollView>;
    return children;
};

const toastSwwText = {
    title: 'Kesalahan Pada Sistem',
    subtitle: 'Mohon maaf, silahkan kembali nanti 🙏🏻',
};

const Container = (props: ContainerProps) => {
    const {
 showToast, toastSww, toastType, toastTitle, toastSubTitle,
} = props;
    React.useEffect(() => {
        if (showToast) {
            Toast.show({
                type: toastSww ? 'error' : toastType,
                text1: toastSww ? toastSwwText.title : toastTitle,
                text2: toastSww ? toastSwwText.subtitle : toastSubTitle,
                topOffset: 0,
                visibilityTime: 2500,
            });
        }
    }, [showToast]);
    return (
        <Fragment>
            <StatusBar animated={true} backgroundColor={props.barColor} barStyle={props.barType} />
            <View style={[props.style, styles.container(props.backgroundColor)]}>
                {props.withOverlayLoading && <CLoadingOverlay loadingText={props.loadingText} />}
                {_renderContent(props.scrollView, props.children)}
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
    showToast: PropTypes.bool,
    toastSww: PropTypes.bool,
    toastType: PropTypes.string,
    toastTitle: PropTypes.string,
    toastSubTitle: PropTypes.string,
};

Container.defaultProps = {
    backgroundColor: 'white',
    withOverlayLoading: false,
    loadingText: 'Loading...',
    barColor: 'white',
    barType: 'dark-content',
    scrollView: false,
    showToast: false,
    toastSww: false,
    toastType: 'info',
    toastTitle: 'Notif Title',
    toastSubTitle: 'Notif Subtitle',
};
