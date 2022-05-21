const defaultProps = {
    title: 'Something Went Wrong',
    // eslint-disable-next-line max-len
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
