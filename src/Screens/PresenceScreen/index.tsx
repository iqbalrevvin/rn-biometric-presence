import React from 'react';
import { useSelector } from 'react-redux';
import PresenceScreenComponent from './PresenceScreen.component';
import { IndexProps } from './PresenceScreen.type';

const _getPresenceScreenProps = (props: IndexProps, stateReducer: any) => ({
    navigation: props.navigation,
    route: props.route,
    loadingPage: stateReducer.loading.loadingPage,
    loadingPageText: stateReducer.loading.loadingPageText,
});

const PresenceScreen = (props: IndexProps) => {
    const stateReducer = useSelector((state) => state);
    return (
      <PresenceScreenComponent {..._getPresenceScreenProps(props, stateReducer)} />
    );
};

export default PresenceScreen;
