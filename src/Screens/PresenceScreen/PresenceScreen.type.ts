import React from 'react';
import { HookContainerState } from '~Components/Container/Container.type';
export interface IndexProps {
    navigation: any;
    route: any;
}

export interface Props {
    tokenAuth: string;
    navigation: any;
    route: any;
    loadingPage: boolean;
    loadingPageText: string;
    hitSaveBiometricIdMutation: any;
    hitPresenceMutation: any;
    setLoadingPage: any;
    setLogout: any;
    setBiometricIdDispatch: any;
    biometricId: string;
}

export interface BiometricState {
    isBiometricSupport: boolean;
}

export interface HookBiometricState {
    isBiometricSupport: boolean;
    // eslint-disable-next-line no-unused-vars
    setIsBiometricSupport: (isBiometricSupport: boolean) => void;
}

export interface LocationState {
    latitude: number;
    longitude: number;
}
export interface HookLocationState {
    location: LocationState;
    setLocation: React.Dispatch<React.SetStateAction<LocationState>>;
}

export interface BiometricProps {
    primaryProps: Props,
    hookContainer: HookContainerState,
    hookBiometric: HookBiometricState,
    hookLocation: HookLocationState
}

export interface PayloadSendBiometric {
    biometric_id: string;
    device_id: string;
    device_name: string;
}

export interface DataSubmitHitPresence {
    token: string;
    biometric_id: string;
    tipe: string;
    latitude: number;
    longitude: number;
}
