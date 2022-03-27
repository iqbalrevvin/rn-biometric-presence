import { Colors } from '../../Utility';

const textCondition = (bold, semiBold) => {
    if (bold) return 'Muli-Bold';
    if (semiBold) return 'Muli-SemiBold';
    return 'Muli-Regular';
};

export default {
    textSection: (bold, semiBold, color, size) => ({
        fontFamily: textCondition(bold, semiBold),
        fontSize: size || 14,
        color: color || Colors.grey900,
    }),
};
