import React from 'react';
import { ListItem } from 'react-native-elements';
import Configs from './CListItemRegular.config';
import styles from './CListItemRegular.style';
import { Props } from './CListItemRegular.type';

const CListItemRegular = (props: Props) => {
  const { onPress, withDivider, title, subtitle, withArrow } = props;
  return (
    <ListItem
      onPress={onPress}
      bottomDivider={withDivider}
      hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>
      <ListItem.Content>
        <ListItem.Title style={styles.titleSection}>{title}</ListItem.Title>
        <ListItem.Subtitle style={styles.subtitleSection}>{subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      {withArrow && <ListItem.Chevron />}
    </ListItem>
  );
};

CListItemRegular.defaultProps = Configs.defaultProps;
CListItemRegular.propTypes = Configs.propTypes;

const compare = (prevProps: Props, nextProps: Props) => {
  const equal = JSON.stringify(prevProps) === JSON.stringify(nextProps);
  return equal;
};

export default React.memo(CListItemRegular, compare);
