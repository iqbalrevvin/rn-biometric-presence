import React, { Fragment } from 'react';
import { Image, View } from 'react-native';
import { Images } from '../../Utility';
import styles from './CErrorScreen.style';
import Configs, { Props } from './CErrorScreen.config';
import CText from '~Components/CText';
import CGap from '~Components/CGap';
import CButtonRegular from '~Components/Buttons/CButtonRegular';

const _renderInfoTitleDescription = (title: string, description: string) => (
    <Fragment>
        <CText bold size={17}>{title}</CText>
        <CText size={15} style={styles.textDescriptionSection}>{description}</CText>
    </Fragment>
);

const _renderButtonAction = (actionTitle: string, onActionPress: () => void) => (
    <CButtonRegular
      titleBold
      type="outline" title={actionTitle}
      style={styles.buttonContainerSection}
      onPress={onActionPress}
    />
);

const CErrorScreen = (props: Props) => {
    const { errorArtImage } = Images;
    return (
        <View style={styles.container}>
            <Image source={errorArtImage} style={styles.imageArtSection} />
            {_renderInfoTitleDescription(props.title, props.description)}
            <CGap height={20} />
            {_renderButtonAction(props.actionTitle, props.onActionPress)}
        </View>
    );
};

CErrorScreen.defaultProps = Configs.defaultProps;

export default CErrorScreen;
