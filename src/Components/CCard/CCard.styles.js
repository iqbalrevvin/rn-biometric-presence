export default {
    container: (borderRadius, borderWidth, elevation) => ({
        borderRadius,
        elevation,
        borderWidth,
    }),
    liniarProgressContainer: {
        backgroundColor: 'green',
        bottom: 15,
    },
    liniarProgressSection: (borderRadius) => ({
        width: '109%',
        height: 5,
        borderRadius: borderRadius || 0,
        position: 'absolute',
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        right: 0,
        left: -15,
    }),
};
