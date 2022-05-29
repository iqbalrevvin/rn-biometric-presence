export const defaultProps = {
    title: 'Alert',
    desc: 'Description Alert',
    trueText: 'OK',
    falseText: 'CANCEL',
    onTrue: () => {},
    onFalse: () => console.log('cancel'),
};

export default {
    defaultProps,
};
