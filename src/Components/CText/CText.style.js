import { Colors } from '../../Utility';

export default {
    textSection: (bold, color, size) => ({
        fontSize: size || 14,
        color: color || Colors.grey900,
        fontWeight: bold ? 'bold' : 'normal',
    }),
};
