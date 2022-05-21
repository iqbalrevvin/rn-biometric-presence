import React from 'react';
export interface ContainerProps {
    children: React.ReactNode;
    style?: any;
    barColor?: string;
    barType?: any;
    showToast?: boolean;
    toastSww?: boolean;
    toastTopOffset?: number;
    toastType?: string;
    toastTitle?: string;
    toastSubTitle?: string;
    withOverlayLoading?: boolean;
    loadingText?: string;
    scrollView?: boolean;
    backgroundColor?: any;
    headerColor?: string;
    headerTitle?: string;
    headerLeftIcon?: string;
    headerLeftIconOnPress?: () => void;
    headerRightIcon?: string;
    headerRightIconOnPress?: () => void;
}

export interface ContainerState {
    backgroundColor: string;
    barColor: string;
    barType: string;
    withOverlayLoading: boolean;
    loadingText: string;
    showToast: boolean;
    toastSww: boolean;
    toastTopOffset: number;
    toastType: string;
    toastTitle: string;
    toastSubTitle: string;
}

type ContainerStateSetter = React.Dispatch<React.SetStateAction<ContainerState>>;

export interface HookContainerState {
    containerState: ContainerState;
    setContainerState: ContainerStateSetter;
}
