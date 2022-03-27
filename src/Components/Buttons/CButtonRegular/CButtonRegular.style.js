import { Colors } from '../../../Utility';

export default {
    container: (color) => ({
        backgroundColor: color || Colors.primary,
    }),
    titleSection: (titleSize, titleBold) => ({
        fontSize: titleSize || 13,
        fontWeight: titleBold ? 'bold' : 'normal',
    }),
};
