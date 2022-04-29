import React from 'react';
import { View } from 'react-native';
import Container from '~Components/Container';
import { ContainerState, HookContainerState } from '~Components/Container/Container.type';
import CText from '~Components/CText';
import { Colors } from '~Utility';

const useHookContainerState = (): HookContainerState => {
    const [containerState, setContainerState] = React.useState({
        backgroundColor: Colors.white,
        barColor: Colors.primary,
        barType: Colors.barLightStyle,
        withOverlayLoading: false,
        loadingText: '',
    });
    return { containerState, setContainerState };
};

const getContainerProps = (containerState: ContainerState) => ({
    backgroundColor: containerState.backgroundColor,
    barColor: containerState.barColor,
    barType: containerState.barType,
    withOverlayLoading: containerState.withOverlayLoading,
    loadingText: containerState.loadingText,
});

const PresenceScreenComponent = () => {
    const hookContainer = useHookContainerState();
    return (
        <Container scrollView {...getContainerProps(hookContainer.containerState)}>
            <View>
                <CText>Presence Screen</CText>
            </View>
        </Container>
    );
};

export default PresenceScreenComponent;
