import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    contentContainer: ViewStyle;
    mapViewContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    contentContainer: {
        flex: 1,
    },
    mapViewContainer: {
        height: 200,
    },
});

export default styles;
