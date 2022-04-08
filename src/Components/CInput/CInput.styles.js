// eslint-disable-next-line import/extensions
import { Colors } from '../../Utility';

const handleBorderColor = (focus, errorMessage) => {
    if (focus) return Colors.primary;
    if (errorMessage) return Colors.accent4;
    return Colors.grey500;
};

export default {
    inputContainerStyle: (focus, errorMessage) => ({
        borderBottomWidth: focus ? 2 : 1,
        borderColor: handleBorderColor(focus, errorMessage),
    }),
    labelStyle: (focus) => ({
        color: focus ? Colors.primary : Colors.grey500,
    }),
};
