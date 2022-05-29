import React from 'react';
export interface IndexProps {
    navigation: any;
    route: any;
    profileState: ProfileStateType;
}

export interface ProfileStateType {
    fullname: string;
    gender: string;
    email: string;
    phone: string;
    deviceid: string;
    deviceName: string;
    divisionId: number;
    divisionName: string;
    workHoursId: number;
    workHoursName: string;
    workHoursInStart: string;
    workHoursInEnd: string;
    workHoursOutStart: string;
    workHoursOutEnd: string;
    biometricId: string;
}
type HookConnectSetter = React.Dispatch<React.SetStateAction<boolean|any>>;

export interface HookConnectionState {
    connect: boolean|any;
    setConnect: HookConnectSetter;
}


export interface UseQueryProps {
    data: any,
    isLoading: boolean,
    isSuccess: boolean,
    error: any,
}

export interface Props {
    navigation: any;
    route: any;
    profileState: ProfileStateType;
    setLogout: any;
    authPropsQuery: any;
}
