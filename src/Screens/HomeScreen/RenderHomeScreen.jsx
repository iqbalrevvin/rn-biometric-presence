/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Divider } from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/id';
import Container from '../../Components/Container';
import { Colors, Images } from '../../Utility';
import styles from './HomeScreen.styles';
import CText from '../../Components/CText';
import Configs from './HomeScreen.config';
import CGap from '../../Components/CGap';
import CButtonRegular from '../../Components/Buttons/CButtonRegular';
import CListItemRegular from '../../Components/CListItemRegular';

const hookContainerState = () => {
    const [containerState, setContainerstate] = React.useState({
        backgroundColor: Colors.white,
        barColor: Colors.primary,
        barType: Colors.barLightStyle,
        withOverlayLoading: false,
        loadingText: null,
    });
    return { containerState, setContainerstate };
};

const hookTimeState = () => {
    const [dateNow, setDateNow] = React.useState(new Date());
    return { dateNow, setDateNow };
};

const refreshTime = (hookTimerProps) => {
    const { setDateNow } = hookTimerProps;
    setDateNow(new Date());
};

const _useTimeEffect = (hookTimerProps) => {
    React.useEffect(() => {
        const interval = setInterval(() => {
            refreshTime(hookTimerProps);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
};

const _getContainerProps = (containerState) => ({
    backgroundColor: containerState.backgroundColor,
    barColor: containerState.barColor,
    barType: containerState.barType,
    withOverlayLoading: containerState.withOverlayLoading,
    loadingText: containerState.loadingText,
});

const _renderTimeSection = (props) => {
    const { hookTimer } = props;
    const { dateNow } = hookTimer;
    return (
        <View style={styles.timeContainer}>
            <CText color={Colors.white} bold size={20}>
                {moment(dateNow).format('LTS')}
            </CText>
            <CText color={Colors.white} bold size={18}>
                {moment(dateNow).format('dddd')}, {moment(dateNow).format('LL')}
            </CText>
        </View>
    );
};

const _renderCardNameInfo = () => (
    <View style={styles.cardNameInfo}>
        <CText color={Colors.grey800} bold size={15}>
            Hi, Iqbal Revvin
        </CText>
        <CText color={Colors.grey800} bold size={13}>
            Digital Banking Developer
        </CText>
    </View>
);

const _renderCardShiftInfo = () => (
    <View style={styles.cardShiftInfo}>
        <CText color={Colors.grey700} bold size={16}>
            Non Shift
        </CText>
        <CText color={Colors.grey700} bold size={14}>
            Jam Masuk : 07:00:00 - 08:00:00
        </CText>
        <CText color={Colors.grey700} bold size={14}>
            Jam Pulang : 17:00:00 - 18:00:00
        </CText>
    </View>
);

const _renderButtonPresence = () => (
    <View style={styles.buttonPresenceContainer}>
        <View style={styles.buttonPresenceSection}>
            <CButtonRegular titleBold title="CLOCK IN" color={Colors.primary} />
        </View>
        <View style={styles.buttonPresenceSection}>
            <CButtonRegular titleBold title="CLOCK OUT" color={Colors.primary} />
        </View>
    </View>
);

const _renderInfoActionCard = (props) => (
    <View style={styles.infoActionCard(Colors.white)}>
        {_renderCardNameInfo(props)}
        {_renderCardShiftInfo(props)}
        <CGap height={10} />
        <Divider orientation="horizontal" />
        <CGap height={20} />
        {_renderButtonPresence(props)}
        <CGap height={10} />
    </View>
);

const _renderHeaderSection = (props) => {
    const { bgImage2 } = Images;
    const primaryColor = Colors.primary;
    return (
        <View style={styles.headerContainer(primaryColor)}>
            <Image style={styles.headerImageSection} source={bgImage2} />
            <CGap height={10} />
            {_renderTimeSection(props)}
            <CGap height={20} />
            {_renderInfoActionCard(props)}
        </View>
    );
};

const _renderItemList = ({ item }) => (
    <CListItemRegular
        title={moment(item.time).format('LLL')}
        subtitle={item.type}
        withArrow
        withDivider
    />
);

const _renderFlatList = (props) => {
    const { primaryProps } = props;
    return (
        <FlatList
            keyExtractor={((item) => item.id.toString())}
            data={primaryProps.dataList}
            renderItem={(_renderItemList)}
        />
    );
};

const _renderListHistoryPresence = (props) => {
    const whiteColor = Colors.white;
    return (
        <View style={styles.historyPresenceContainer(whiteColor)}>
            <View style={styles.listHeaderContainer}>
                <CText bold color={Colors.grey900} size={18}>Attendance Log</CText>
                <CText semiBold color={Colors.grey800} size={16}>Log History</CText>
            </View>
            {_renderFlatList(props)}
        </View>
    );
};

const _getHeaderSectionProps = (primaryProps, hookTimer) => ({
    primaryProps,
    hookTimer,
});

const _getListHistoryProps = (primaryProps) => ({
    primaryProps,
});

const RenderHomeScreen = (props) => {
    const hookContainer = hookContainerState();
    const hookTimer = hookTimeState();
    const headerSectionProps = _getHeaderSectionProps(props, hookTimer);
    const listHistoryProps = _getListHistoryProps(props);
    _useTimeEffect(hookTimer);
    return (
        <Container {..._getContainerProps(hookContainer.containerState)}>
            {_renderHeaderSection(headerSectionProps)}
            {_renderListHistoryPresence(listHistoryProps)}
        </Container>
    );
};

RenderHomeScreen.defaultProps = Configs.defaultProps;
RenderHomeScreen.propTypes = Configs.propTypes;

export default RenderHomeScreen;
