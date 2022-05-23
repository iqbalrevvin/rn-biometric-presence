import { ImageStyle, StatusBar, StyleSheet, ViewStyle } from 'react-native';
import { scaleHeight, scaleSize } from '~Utility/Size';
import Colors from '../../Utility/Colors';

interface Styles {
    container: ViewStyle;
    headerContentContainer: ViewStyle;
    avatarImage: ImageStyle;
    cardInfoContainer: ViewStyle;
    cardInfoSection: ViewStyle;
    titleSection: ViewStyle;
    iconConfigContainer: ViewStyle;
    renderInfoContainer: ViewStyle;
    infoProfileSection: ViewStyle;
    buttonLogoutContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
    //    paddingTop: StatusBar.currentHeight,
    },
    headerContentContainer: {
        backgroundColor: Colors.primary,
        padding: scaleSize(65),
        alignItems: 'center',
    },
    avatarImage: {
        width: scaleSize(96),
        height: scaleSize(96),
        borderRadius: scaleSize(100) / 2,
        borderColor: Colors.accent3,
        borderWidth: 5,
    },
    cardInfoContainer: {
        bottom: scaleSize(55),
    },
    cardInfoSection: {
        marginVertical: 0,
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconConfigContainer: {
        padding: scaleSize(10),
        bottom: scaleSize(10),
    },
    renderInfoContainer: {
        marginTop: scaleHeight(10),
    },
    infoProfileSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaleHeight(10),
    },
    buttonLogoutContainer: {
        margin: scaleSize(13),
    },
});

export default styles;
