export default {
    container: (color: any, type: any) => ({
        backgroundColor: color || null,
        padding: 12,
        borderWidth: type !== 'solid' ? null : 1,
    }),
    titleSection: (titleSize: number, titleBold: any) => ({
        fontFamily: titleBold ? 'Muli-Bold' : 'Muli-SemiBold',
        fontSize: titleSize || 13,
        fontWeight: titleBold && 'bold',
    }),
};
