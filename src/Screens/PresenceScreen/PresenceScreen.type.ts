import React from 'react';
import { HookContainerState } from '~Components/Container/Container.type';
export interface IndexProps {
    navigation: any;
    route: any;
}

export interface Props {
    navigation: any;
    route: any;
    loadingPage: boolean;
    loadingPageText: string;
    hitSaveBiometricIdMutation: any;
    hitPresenceMutation: any;
    setBiometricIdDispatch: any;
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
}

export interface dataSaveBiometric {
    biometricId: string;
}

export interface DataSubmitHitPresence {
    biometric_id: string;
    tipe: string;
    latitude: number;
    longitude: number;
}
