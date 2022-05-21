import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    map: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default styles;
