import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import Size from '~Utility/Size';
import Colors from '../../Utility/Colors';

const { scaleSize, scaleWidth, scaleHeight } = Size;
interface Styles {
    contentContainer: ViewStyle;
    mapViewContainer: ViewStyle;
    contentPresenceTitle: ViewStyle;
    biometricLogo: ImageStyle;
    buttonFooterContainer: ViewStyle;
    loadingMapContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    contentContainer: {
        flex: 1,
    },
    mapViewContainer: {
        height: scaleHeight(175),
    },
    contentPresenceTitle: {
        alignItems: 'center',
        marginTop: scaleHeight(10),
    },
    biometricLogo: {
        marginTop: scaleHeight(5),
        height: scaleHeight(175),
        width: scaleWidth(165),
        resizeMode: 'stretch',
    },
    buttonFooterContainer: {
        padding: scaleSize(5),
    },
    loadingMapContainer: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: Colors.grey100,
    },
});

export default styles;
