import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    contentContainer: ViewStyle;
    mapViewContainer: ViewStyle;
    contentPresenceTitle: ViewStyle;
    biometricLogo: ImageStyle;
    buttonFooterContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    contentContainer: {
        flex: 1,
    },
    mapViewContainer: {
        height: 200,
    },
    contentPresenceTitle: {
        alignItems: 'center',
        marginTop: 10,
    },
    biometricLogo: {
        marginTop: 10,
        height: 200,
        width: 175,
        resizeMode: 'stretch',
    },
    buttonFooterContainer: {
        padding: 5,
    },
});

export default styles;
