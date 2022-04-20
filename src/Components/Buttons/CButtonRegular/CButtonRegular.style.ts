export default {
    container: (color: any) => ({
        backgroundColor: color || null,
        padding: 12,
    }),
    titleSection: (titleSize: number, titleBold: any) => ({
        fontFamily: titleBold ? 'Muli-Bold' : 'Muli-SemiBold',
        fontSize: titleSize || 13,
        fontWeight: titleBold && 'bold',
    }),
};
