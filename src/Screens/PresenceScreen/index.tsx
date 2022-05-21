import React from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setBiometricIdAction } from '~Services/Redux/Actions/BiometricAction';
import { saveBiometricId, submitHitPresence } from './PresenceScreen.action';
import PresenceScreenComponent from './PresenceScreen.component';
import { IndexProps } from './PresenceScreen.type';

const _getPresenceScreenProps = (props: IndexProps, dispatch: any, mutation: any, stateReducer: any) => ({
    navigation: props.navigation,
    route: props.route,
    loadingPage: stateReducer.loading.loadingPage,
    loadingPageText: stateReducer.loading.loadingPageText,
    hitSaveBiometricIdMutation: mutation.hitSaveBiometricId,
    hitPresenceMutation: mutation.hitPresenceMutation,
    setBiometricIdDispatch: (id: string) => dispatch(setBiometricIdAction(id)),
});

const PresenceScreen = (props: IndexProps) => {
    const stateReducer = useSelector((state) => state);
    const dispatch = useDispatch();
    const mutation = {
        hitSaveBiometricId: useMutation(saveBiometricId),
        hitPresenceMutation: useMutation(submitHitPresence),
    };
    return (
      <PresenceScreenComponent {..._getPresenceScreenProps(props, dispatch, mutation, stateReducer)} />
    );
};

export default PresenceScreen;
