import { Alert } from 'react-native';
import { AlertGeneralType } from './AlertGeneral.types';
import { defaultProps } from './AlertGeneral.config';

const AlertGeneral = (props: AlertGeneralType) => {
    const { title, desc, trueText, falseText, onTrue, onFalse } = props;
    Alert.alert(title, desc, [
        { text: trueText, onPress: onTrue },
        { text: falseText, onPress: onFalse, style: 'cancel' },
    ]);
};

AlertGeneral.defaultProps = defaultProps;

export default AlertGeneral;
