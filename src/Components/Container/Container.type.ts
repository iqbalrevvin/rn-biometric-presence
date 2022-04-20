import React from 'react';
export interface ContainerProps {
    children: React.ReactNode;
    style?: any;
    barColor?: string;
    barType?: any;
    showToast: boolean;
    toastSww: boolean;
    toastType: string;
    toastTitle: string;
    toastSubTitle: string;
    withOverlayLoading?: boolean;
    loadingText?: string;
    scrollView?: boolean;
    backgroundColor?: any;
}
