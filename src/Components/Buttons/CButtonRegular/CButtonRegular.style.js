export default {
    container: (color) => ({
        backgroundColor: color || null,
        padding: 10,
    }),
    titleSection: (titleSize, titleBold) => ({
        fontFamily: titleBold ? 'Muli-Bold' : 'Muli-SemiBold',
        fontSize: titleSize || 13,
        fontWeight: titleBold ? 'bold' : 'normal',
    }),
};
