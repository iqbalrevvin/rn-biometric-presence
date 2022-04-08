import { Colors } from '../../Utility';

const textCondition = (bold: boolean, semiBold: boolean) => {
    if (bold) return 'Muli-Bold';
    if (semiBold) return 'Muli-SemiBold';
    return 'Muli-Regular';
};

const fontWeightCondition = (bold: boolean, semiBold: boolean) => {
    if (bold) return 'bold';
    if (semiBold) return '500';
    return 'normal';
};

export default {
    textSection: (bold: boolean, semiBold: boolean, color: string, size: string) => ({
        fontWeight: fontWeightCondition(bold, semiBold),
        fontFamily: textCondition(bold, semiBold),
        fontSize: size || 14,
        color: color || Colors.grey900,
    }),
}
