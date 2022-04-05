/* eslint-disable no-nested-ternary */
import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from '../../Utility';

const textCondition = (bold, semiBold) => {
    if (bold) return 'Muli-Bold';
    if (semiBold) return 'Muli-SemiBold';
    return 'Muli-Regular';
};

const fontWeightCondition = (bold, semiBold) => {
    if (bold) return 'bold';
    if (semiBold) return '500';
    return 'normal';
};

const styles = StyleSheet.create<Styles>({
    textSection: (bold: string, semiBold: string, color: string, size: string) => ({
        fontWeight: fontWeightCondition(bold, semiBold),
        fontFamily: textCondition(bold, semiBold),
        fontSize: size || 14,
        color: color || Colors.grey900,
    }),
});

export default styles;
// export default {
//     textSection: (bold, semiBold, color, size) => ({
//         fontWeight: fontWeightCondition(bold, semiBold),
//         fontFamily: textCondition(bold, semiBold),
//         fontSize: size || 14,
//         color: color || Colors.grey900,
//     }),
// };
