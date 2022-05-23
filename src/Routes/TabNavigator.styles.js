export default {
    tabIconContainer: {
        top: 5,
    },
    tabIconSection: (focused, size, color) => ({
        color: focused ? color : 'gray',
        fontWeight: 'bold',
        fontSize: focused ? 28 : 24,
        marginTop: -5,
    }),
};
