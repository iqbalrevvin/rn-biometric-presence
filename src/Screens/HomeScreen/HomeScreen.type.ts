import React from 'react';
export interface IndexProps {
    navigation: any;
}

export interface Props {
    navigation: any;
    dataList: any;
}

export interface ContainerState {
    backgroundColor: string;
    barColor: string;
    barType: string;
    withOverlayLoading: boolean;
    loadingText: string;
}

type ContainerStateSetter = React.Dispatch<React.SetStateAction<ContainerState>>;

export interface HookContainerState {
    containerState: ContainerState;
    setContainerState: ContainerStateSetter;
}

type HookTimeSetter = React.Dispatch<React.SetStateAction<Date>>;

export interface HookTimeState {
    dateNow: Date;
    setDateNow: HookTimeSetter;
}

export interface HeaderSectionProps {
    primaryProps: Props;
    hookTimer: HookTimeState;
}

export interface ListHistoryProps {
    primaryProps: Props;
}
