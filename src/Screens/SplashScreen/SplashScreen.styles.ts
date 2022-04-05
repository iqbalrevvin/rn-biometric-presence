import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
    container: ViewStyle;
    animationSection: ViewStyle;
    versionInfoContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
