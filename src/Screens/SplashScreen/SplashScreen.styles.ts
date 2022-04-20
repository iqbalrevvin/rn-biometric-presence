import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    logoSection: ImageStyle;
    animationSection: ViewStyle;
    versionInfoContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoSection: {
        width: 120,
        height: 120,
    },
    animationSection: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    versionInfoContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
});

export default styles;
