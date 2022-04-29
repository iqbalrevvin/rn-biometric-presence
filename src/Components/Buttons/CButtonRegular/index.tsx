import React from 'react';
import { Button } from 'react-native-elements';
import Configs from './CButtonRegular.config';
import styles from './CButtonRegular.style';
import { Props } from './CButtonRegular.type';

const CButtonRegular = (props: Props) => (
  <Button
    icon={props.icon || null}
    title={props.title}
    loading={props.loading}
    disabled={props.disabled}
    type={props.type}
    buttonStyle={[props.style, styles.container(props.color, props.type)]}
    titleStyle={styles.titleSection(props.titleSize, props.titleBold)}
    onPress={props.onPress}
    />
);

CButtonRegular.propTypes = Configs.propTypes;

export default React.memo(CButtonRegular);
