import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    contentContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
