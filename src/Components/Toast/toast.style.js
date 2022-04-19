import { Colors } from '~Utility';

const colorTypeHandler = (type) => {
    if (type === 'success') return Colors.accent3;
    if (type === 'error') return Colors.accent4;
    return Colors.primary;
};

export default {
    toastStyle: (type) => ({
        borderLeftColor: colorTypeHandler(type),
        borderLeftWidth: 25,
        width: '100%',
        borderRadius: 0,
    }),
    text1: {
        fontSize: 14,
        marginBottom: 2,
        color: '#000',
        width: '100%',
        fontFamily: 'Muli-SemiBold',
      },
      text2: {
        fontSize: 12,
        color: '#979797',
        width: '100%',
        fontFamily: 'Muli-SemiBold',
      },
};
