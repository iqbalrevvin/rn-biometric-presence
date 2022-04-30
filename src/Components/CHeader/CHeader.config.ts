import { Colors } from '~Utility';

const defaultProps = {
    headerColor: '#005CEE',
    leftIcon: 'arrow-back',
    leftIconOnPress: () => {},
    title: 'Title Header',
    rightIcon: '',
    rightIconOnPress: () => {},
};

export interface Props {
    headerColor?: string;
    leftIcon: string;
    leftIconOnPress: () => void;
    title: string;
    rightIcon?: string;
    rightIconOnPress?: () => void;
}

export default {
    defaultProps,
};

