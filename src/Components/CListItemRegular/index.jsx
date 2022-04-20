import React from 'react';
import { ListItem } from 'react-native-elements';
import Configs from './CListItemRegular.config';
import styles from './CListItemRegular.style';

const CListItemRegular = ({
  withDivider, title, subtitle, withArrow, onPress,
}) => (
  <ListItem onPress={onPress} bottomDivider={withDivider}>
    <ListItem.Content>
      <ListItem.Title style={styles.titleSection}>{title}</ListItem.Title>
      <ListItem.Subtitle style={styles.subtitleSection}>{subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    {withArrow && <ListItem.Chevron />}
  </ListItem>
);

CListItemRegular.defaultProps = Configs.defaultProps;
CListItemRegular.propTypes = Configs.propTypes;

export default CListItemRegular;
