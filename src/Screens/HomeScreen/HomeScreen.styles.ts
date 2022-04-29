import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import Colors from '~Utility/Colors';

const { width } = Dimensions.get('window');

interface Styles {
    headerContainer: ViewStyle;
    headerImageSection: ImageStyle;
    timeContainer: ViewStyle;
    infoActionCard: ViewStyle;
    cardNameInfo: ViewStyle;
    cardShiftInfo: ViewStyle;
    buttonPresenceContainer: ViewStyle;
    buttonPresenceSection: ViewStyle;
    historyPresenceContainer: ViewStyle;
    listHeaderContainer: ViewStyle;
    footerTextInfoContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    headerContainer: {
        backgroundColor: Colors.primary,
    },
    headerImageSection: {
        position: 'absolute',
        resizeMode: 'cover',
        width: '100%',
        alignSelf: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        opacity: 0.5,
        bottom: width / 5,
    },
    timeContainer: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoActionCard: {
        backgroundColor: Colors.white,
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    cardNameInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardShiftInfo: {
        alignItems: 'center',
        marginTop: 20,
    },
    buttonPresenceContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonPresenceSection: {
        flex: 1,
        marginHorizontal: 10,
    },
    historyPresenceContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    listHeaderContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerTextInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        paddingBottom: 5,
    },
});

export default styles;
