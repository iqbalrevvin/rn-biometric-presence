import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {Divider} from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/id';
import Container from '~Components/Container';
import {Colors, Images, Screen} from '~Utility';
import styles from './HomeScreen.styles';
import CText from '~Components/CText';
import Configs from './HomeScreen.config';
import CGap from '~Components/CGap';
import CButtonRegular from '~Components/Buttons/CButtonRegular';
import CListItemRegular from '~Components/CListItemRegular';
import {
  ContainerState,
  HeaderSectionProps,
  HookContainerState,
  HookTimeState,
  ListHistoryProps,
  Props,
  UseQueryProps,
} from './HomeScreen.type';
import CErrorScreen from '~Components/CErrorScreen';
import CHeader from '~Components/CHeader';

const useHookContainerState = (): HookContainerState => {
  const [containerState, setContainerState] = React.useState({
    backgroundColor: Colors.white,
    barColor: Colors.primary,
    barType: Colors.barLightStyle,
    withOverlayLoading: false,
    loadingText: '',
  });
  return {containerState, setContainerState};
};

const useHookTimeState = (): HookTimeState => {
  const [dateNow, setDateNow] = React.useState(new Date());
  return {dateNow, setDateNow};
};

const refreshTime = (hookTimerProps: HookTimeState) => {
  const {setDateNow} = hookTimerProps;
  setDateNow(new Date());
};

const _useTimeEffect = (hookTimerProps: HookTimeState) => {
  React.useEffect(() => {
    const interval = setInterval(() => {
      refreshTime(hookTimerProps);
    }, 1000);
    return () => clearInterval(interval);
  });
};

const _getContainerProps = (containerState: ContainerState) => ({
  backgroundColor: containerState.backgroundColor,
  barColor: containerState.barColor,
  barType: containerState.barType,
  withOverlayLoading: containerState.withOverlayLoading,
  loadingText: containerState.loadingText,
});

const _renderTimeSection = (props: HeaderSectionProps) => {
  const {hookTimer} = props;
  const {dateNow} = hookTimer;
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

const _renderCardNameInfo = (props: HeaderSectionProps) => {
  const { profileState } = props.primaryProps;
  return (
    <View style={styles.cardNameInfo}>
      <CText color={Colors.grey800} bold size={15}>
        Hi, {profileState.fullname}
      </CText>
      <CText color={Colors.grey800} bold size={13}>
        {profileState.divisionName}
      </CText>
    </View>
  );
};

const _renderWorkHoursTextInfo = (type: string, hours1: string, hours2: string) => (
  <CText color={Colors.grey700} bold size={14}>
    {type} : {hours1} - {hours2}
  </CText>
);

const _renderCardShiftInfo = (props: HeaderSectionProps) => {
  const {
    profileState: {workHoursInStart, workHoursInEnd, workHoursOutStart, workHoursOutEnd},
  } = props.primaryProps;
  return (
    <View style={styles.cardShiftInfo}>
      <CText color={Colors.grey700} bold size={16}>
        {props.primaryProps.profileState.workHoursName}
      </CText>
      {_renderWorkHoursTextInfo('Jam Masuk', workHoursInStart, workHoursInEnd)}
      {_renderWorkHoursTextInfo('Jam Pulang', workHoursOutStart, workHoursOutEnd)}
    </View>
  );
};

const _renderButtonAction = (title: string, onNavigate: () => void) => (
  <View style={styles.buttonPresenceSection}>
    <CButtonRegular
      titleBold title={title}
      color={Colors.primary}
      onPress={onNavigate}
    />
  </View>
);

const _renderButtonPresence = (props: HeaderSectionProps) => {
  const { navigation } = props.primaryProps;
  return (
    <View style={styles.buttonPresenceContainer}>
      {_renderButtonAction(
        'CLOCK IN',
        () => navigation.navigate(Screen.PRESENCE_SCREEN.name, {type: 'ClockIn'})
      )}
      {_renderButtonAction(
        'CLOCK OUT',
        () => navigation.navigate(Screen.PRESENCE_SCREEN.name, {type: 'ClockOut'})
      )}
    </View>
  );
};

const _renderInfoActionCard = (props: HeaderSectionProps) => (
  <View style={styles.infoActionCard}>
    {_renderCardNameInfo(props)}
    {_renderCardShiftInfo(props)}
    <CGap height={10} />
    <Divider orientation="horizontal" />
    <CGap height={20} />
    {_renderButtonPresence(props)}
    <CGap height={10} />
  </View>
);

const _getHeaderComponentSection = () => ({
  title: 'Biometric Presence',
  placement: 'center',
  leftIcon: '',
  noBorder: true,
});

const _renderHeaderSection = (props: HeaderSectionProps) => {
  const {bgImage2} = Images;
  return (
    <View style={styles.headerContainer}>
      <CHeader {..._getHeaderComponentSection()} />
      <CGap height={10} />
      <Image style={styles.headerImageSection} source={bgImage2} />
      {_renderTimeSection(props)}
      <CGap height={20} />
      {_renderInfoActionCard(props)}
    </View>
  );
};

const _handleFooterTextInfo = (attendanceQuery: UseQueryProps) => {
  const { isFetchingNextPage } = attendanceQuery;
  const _renderText = isFetchingNextPage ? 'Load More...' : 'No More Data';
  return (
    <View style={styles.footerTextInfoContainer}>
      <CText color={Colors.grey500}>{_renderText}</CText>
    </View>
  );
};

const _handleLoadMore = (attendanceQuery: UseQueryProps) => {
  if (attendanceQuery.hasNextPage) {
    attendanceQuery.fetchNextPage();
  }
};

const _handleRefetchData = (attendanceQuery: UseQueryProps) => {
  attendanceQuery.refetch({
    refetchPage: (_page: any, index: number) => index === 0,
  });
};

const _renderItemList = ({item}: any) => (
  <CListItemRegular
    title={moment(item?.created_at).format('LLL')}
    subtitle={item?.tipe}
    withArrow
    withDivider
  />
);

const _getOutputData = (attendanceQuery: UseQueryProps) => {
  const outputData = attendanceQuery?.data?.pages.map(
    (page: any)=> page?.output_data?.data
  ).flat();
  const result = outputData ? outputData : [];
  return result;
};

const _renderFlatList = (props: ListHistoryProps) => {
  const {primaryProps: { attendanceQuery }} = props;
  return (
    <FlatList
      keyExtractor={(item) => item?.id.toString()}
      data={_getOutputData(attendanceQuery)}
      renderItem={_renderItemList}
      onRefresh={() => _handleRefetchData(attendanceQuery)}
      refreshing={attendanceQuery.isFetching && !attendanceQuery.isFetchingNextPage}
      onEndReached={() => _handleLoadMore(attendanceQuery)}
      onEndReachedThreshold={0.5}
      ListFooterComponent={_handleFooterTextInfo(attendanceQuery)}
    />
  );
};

const _renderListHistoryPresence = (props: ListHistoryProps) => (
  <View style={styles.historyPresenceContainer}>
    <View style={styles.listHeaderContainer}>
      <CText bold color={Colors.grey900} size={18}>
        Attendance Log
      </CText>
      <CText semiBold color={Colors.grey800} size={16}>
        Log History
      </CText>
    </View>
    {_renderFlatList(props)}
  </View>
);

const _getHeaderSectionProps = (
  primaryProps: Props,
  hookTimer: HookTimeState,
) => ({
  primaryProps,
  hookTimer,
});

const _getListHistoryProps = (primaryProps: Props) => ({
  primaryProps,
});

const HomeScreenComponent = (props: Props) => {
  const hookContainer = useHookContainerState();
  const hookTimer = useHookTimeState();
  const headerSectionProps = _getHeaderSectionProps(props, hookTimer);
  const listHistoryProps = _getListHistoryProps(props);
  const errorHitQuery = props.attendanceQuery?.data?.pages[0].name === 'Error';
  _useTimeEffect(hookTimer);
  return (
    <Container {..._getContainerProps(hookContainer.containerState)}>
      {_renderHeaderSection(headerSectionProps)}
      {errorHitQuery && <CErrorScreen onActionPress={() => _handleRefetchData(props.attendanceQuery)} />}
      {!errorHitQuery && _renderListHistoryPresence(listHistoryProps)}
    </Container>
  );
};

HomeScreenComponent.defaultProps = Configs.defaultProps;
HomeScreenComponent.propTypes = Configs.propTypes;

export default HomeScreenComponent;
