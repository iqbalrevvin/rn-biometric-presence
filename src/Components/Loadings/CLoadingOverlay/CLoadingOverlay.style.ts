import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    contentOverlay: ViewStyle;
    backdropOverlay: ViewStyle;
    contentLoading: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    contentOverlay: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
    },
    backdropOverlay: {
        backgroundColor: 'rgba(255,255,255,0.92)',
    },
    contentLoading: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default styles;
