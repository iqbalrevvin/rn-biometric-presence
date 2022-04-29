import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    contentContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
