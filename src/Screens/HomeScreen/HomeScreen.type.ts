import React from 'react';
export interface IndexProps {
    navigation: any;
}

export interface Props {
    navigation: any;
    profileState: ProfileStateType;
    attendanceQuery: UseQueryProps;
}

interface ProfileStateType {
    nama_lengkap: string;
    email: string;
    no_telp: string;
    divisi_id: number;
    divisi: {
        nama: string;
    };
    jam_kerja_id: number;
    jam_kerja: {
        nama: string;
        jam_masuk_mulai: string;
        jam_masuk_selesai: string;
        jam_pulang_mulai: string;
        jam_pulang_selesai: string;
    };
}

export interface UseQueryProps {
    data: any,
    refetch: any,
    hasNextPage: any,
    fetchNextPage: () => void,
    isFetching: boolean,
    isFetchingNextPage: boolean,
    isLoading: boolean,
    status: string,
    error: any,
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
