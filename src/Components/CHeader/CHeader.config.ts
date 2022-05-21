import Colors from '~Utility/Colors';

const defaultProps = {
    headerColor: Colors.primary,
    leftIcon: 'arrow-back',
    leftIconOnPress: () => {},
    title: 'Title Header',
    rightIcon: '',
    rightIconOnPress: () => {},
    placement: 'left',
    noBorder: false,
};

export interface Props {
    headerColor?: string;
    leftIcon: string;
    leftIconOnPress: () => void;
    title: string;
    rightIcon?: string;
    rightIconOnPress?: () => void;
    placement?: string|any;
    noBorder?: boolean|any;
}

export default {
    defaultProps,
};

