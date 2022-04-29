import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    imageArtSection: ImageStyle;
    textDescriptionSection: TextStyle;
    buttonContainerSection: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    imageArtSection: {
        height: 175,
        width: 175,
    },
    textDescriptionSection: {
        textAlign: 'center',
    },
    buttonContainerSection: {
        paddingHorizontal: 100
    },
});

export default styles;
