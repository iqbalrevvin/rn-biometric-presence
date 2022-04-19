export interface IndexProps {
    navigation: any;
}
export interface Props {
    navigation: any;
    token: string;
    loggedIn: boolean;
    setLogin: Function;
}

export interface ContainerState {
    backgroundColor: string;
    barColor: string;
    barType: string;
    withOverlayLoading: boolean;
    loadingText: string;
}

type ContainerStateSetter = React.Dispatch<React.SetStateAction<{
    backgroundColor: string;
    barColor: string;
    barType: string;
    withOverlayLoading: boolean;
    loadingText: string;
}>>;

export interface HookContainerState {
    containerState: ContainerState;
    setContainerState: ContainerStateSetter;
}
