import React from 'react';
import {Header} from 'react-native-elements';
import {Colors} from '~Utility';
import Configs, {Props} from './CHeader.config';

const leftComponentObject = (
  leftIcon: string,
  leftIconOnPress: () => void,
) => ({
  icon: leftIcon,
  color: Colors.white,
  iconStyle: {color: Colors.white},
  onPress: leftIconOnPress,
});

const centerComponentObject = (title: string) => ({
  text: title,
  style: {
    color: Colors.white,
    fontFamily: 'Muli-Bold',
    fontSize: 16,
  },
});

const rightComponentObject = (
  rightIcon?: string,
  rightIconOnPress?: () => void,
) => ({
  icon: rightIcon,
  color: Colors.white,
  onPress: rightIconOnPress,
});

const CHeader = (props: Props) => {
  const {headerColor, leftIcon, leftIconOnPress, title, rightIcon, rightIconOnPress} = props;
  return (
    <Header
      placement="left"
      backgroundColor={headerColor}
      leftComponent={leftComponentObject(leftIcon, leftIconOnPress)} // Icon With Ionicons
      centerComponent={centerComponentObject(title)}
      rightComponent={rightComponentObject(rightIcon, rightIconOnPress)}
    />
  );
};

CHeader.defaultProps = Configs.defaultProps;

export default CHeader;
