export default {
    container: (color) => ({
        backgroundColor: color || null,
        padding: 12,
    }),
    titleSection: (titleSize, titleBold) => ({
        fontFamily: titleBold ? 'Muli-Bold' : 'Muli-SemiBold',
        fontSize: titleSize || 13,
        fontWeight: titleBold ? 'bold' : 'normal',
    }),
};
