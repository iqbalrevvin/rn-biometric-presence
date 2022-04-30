import React from 'react';
import { View } from 'react-native';
import Container from '~Components/Container';
import { ContainerState, HookContainerState } from '~Components/Container/Container.type';
import CText from '~Components/CText';
import { Colors } from '~Utility';
import { Props } from './PresenceScreen.type';
import styles from './PresenceScreen.styles';

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

const _getTitleHeader = (type: string) => {
    switch (type) {
        case 'clockIn':
            return 'Clock In';
        case 'clockOut':
            return 'Clock Out';
        default:
            return 'Presence';
    }
};

const getContainerProps = (props: Props, containerState: ContainerState) => ({
    backgroundColor: containerState.backgroundColor,
    barColor: containerState.barColor,
    barType: containerState.barType,
    withOverlayLoading: containerState.withOverlayLoading,
    loadingText: containerState.loadingText,
    headerTitle: _getTitleHeader(props.route.params.type),
    headerLeftIconOnPress: props.navigation.goBack,
});

const PresenceScreenComponent = (props: Props) => {
    const hookContainer = useHookContainerState();
    return (
        <Container scrollView {...getContainerProps(props, hookContainer.containerState)}>
            <View style={styles.contentContainer}>
                <CText bold>Presence Screen</CText>
            </View>
        </Container>
    );
};

export default PresenceScreenComponent;
