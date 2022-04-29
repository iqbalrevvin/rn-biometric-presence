const defaultProps = {
    title: 'Something Went Wrong',
    description: 'An unknown error occurred, please reload the page. If the problem persists, please contact your administrator.',
    actionTitle: 'RELOAD',
    onActionPress: () => {},
};

export interface Props {
    title?: string|any;
    description?: string|any;
    actionTitle?: string|any;
    onActionPress?: any;
}

export default { defaultProps };
