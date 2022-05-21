export default {
    container: (borderRadius?: number, borderWidth?: number, elevation?: number) => ({
        borderRadius,
        elevation,
        borderWidth,
    }),
    liniarProgressContainer: {
        bottom: 15,
    },
    liniarProgressSection: (borderRadius?: number) => ({
        width: '109%',
        height: 5,
        borderRadius: borderRadius || 0,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        right: 0,
        left: -15,
    }),
};
