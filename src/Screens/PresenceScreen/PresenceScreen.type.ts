import React from 'react';
export interface IndexProps {
    navigation: any;
    route: any;
}

export interface Props {
    navigation: any;
    route: any;
    loadingPage: boolean;
    loadingPageText: string;
}

export interface LocationState {
    latitude: number;
    longitude: number;
}
export interface HookLocationState {
    location: LocationState;
    setLocation: React.Dispatch<React.SetStateAction<LocationState>>;
}
