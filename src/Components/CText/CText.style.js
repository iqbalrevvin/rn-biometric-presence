/* eslint-disable no-nested-ternary */
import { Colors } from '../../Utility';

const textCondition = (bold, semiBold) => {
    if (bold) return 'Muli-Bold';
    if (semiBold) return 'Muli-SemiBold';
    return 'Muli-Regular';
};

export default {
    textSection: (bold, semiBold, color, size) => ({
        fontWeight: bold ? 'bold' : semiBold ? '500' : 'normal',
        fontFamily: textCondition(bold, semiBold),
        fontSize: size || 14,
        color: color || Colors.grey900,
    }),
};
