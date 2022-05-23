import React, {Fragment, ReactNode} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import PropTypes from 'prop-types';
import Toast from 'react-native-toast-message';
import styles from './Container.styles';
import CLoadingOverlay from '../Loadings/CLoadingOverlay';
import {ContainerProps} from './Container.type';
import CHeader from '~Components/CHeader';

const _renderContent = (scrollView: any, children: ReactNode) => {
  if (scrollView) return <ScrollView>{children}</ScrollView>;
  return children;
};

const toastSwwText = {
  title: 'Kesalahan Pada Sistem',
  subtitle: 'Mohon maaf, silahkan kembali nanti 🙏🏻',
};

const _getHeaderProps = (props: ContainerProps) => {
    const { headerColor, headerTitle, headerLeftIcon,
        headerLeftIconOnPress, headerRightIcon, headerRightIconOnPress,
    } = props;

    return {
        headerColor: headerColor,
        leftIcon: headerLeftIcon,
        leftIconOnPress: headerLeftIconOnPress,
        title: headerTitle,
        rightIcon: headerRightIcon,
        rightIconOnPress: headerRightIconOnPress,
    };
};

// eslint-disable-next-line max-lines-per-function
const Container = (props: ContainerProps) => {
  const {
      showToast, toastSww, toastType, toastTopOffset,
      toastTitle, toastSubTitle, headerTitle,
} = props;
  // eslint-disable-next-line complexity
  React.useEffect(() => {
    if (showToast) {
      Toast.show({
        type: toastSww ? 'error' : toastType,
        text1: toastSww ? toastSwwText.title : toastTitle,
        text2: toastSww ? toastSwwText.subtitle : toastSubTitle,
        topOffset: toastTopOffset || 0,
        visibilityTime: 3000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);
  return (
    <Fragment>
      <StatusBar
        animated={true}
        backgroundColor={props.barColor}
        barStyle={props.barType}
      />
      <SafeAreaView style={[props.style, styles.container(props.backgroundColor)]}>
        {props.withOverlayLoading && (
          <CLoadingOverlay loadingText={props.loadingText} />
        )}
        {headerTitle && <CHeader {..._getHeaderProps(props)} />}
        {_renderContent(props.scrollView, props.children)}
      </SafeAreaView>
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
