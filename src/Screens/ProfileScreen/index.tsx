import React from 'react';
import { useSelector } from 'react-redux';
import ProfileScreenComponent from './ProfileScreen.component';
import { IndexProps } from './ProfileScreen.type';

const _getPresenceScreenProps = (props: IndexProps, stateReducer: any) => ({
    navigation: props.navigation,
    route: props.route,
    profileState: stateReducer.profile,
});

const ProfileScreen = (props: IndexProps) => {
    const stateReducer = useSelector((state) => state);
    return (
      <ProfileScreenComponent {..._getPresenceScreenProps(props, stateReducer)} />
    );
};

export default ProfileScreen;
