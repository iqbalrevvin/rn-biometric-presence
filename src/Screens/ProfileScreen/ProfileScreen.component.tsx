/* eslint-disable max-lines-per-function */
import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
import CButtonRegular from '~Components/Buttons/CButtonRegular';
import CCard from '~Components/CCard';
import CGap from '~Components/CGap';
import Container from '~Components/Container';
import {
  ContainerState,
  HookContainerState,
} from '~Components/Container/Container.type';
import CText from '~Components/CText';
import {Images} from '~Utility';
import Colors from '~Utility/Colors';
import {scaleFont, scaleHeight} from '~Utility/Size';
import styles from './ProfileScreen.styles';
import {ProfileStateType, Props} from './ProfileScreen.type';

const useHookContainerState = (): HookContainerState => {
  const [containerState, setContainerState] = useState({
    backgroundColor: Colors.transparent,
    barColor: Colors.primary,
    barType: Colors.barLightStyle,
    showToast: false,
    toastSww: false,
    toastTopOffset: scaleHeight(24),
    toastType: 'error',
    toastTitle: 'Title',
    toastSubTitle: 'Subtitle',
  });
  return {containerState, setContainerState};
};

const _renderIconConfig = () => (
  <TouchableOpacity onPress={() => alert('Test Click')}>
    <View style={styles.iconConfigContainer}>
      <Icon
        type="ionicon"
        name={'md-settings-outline'}
        size={20}
        tvParallaxProperties={undefined}
      />
    </View>
  </TouchableOpacity>
);

const _renderItemInfo = (title: string, desc: string) => (
    <View style={styles.infoProfileSection}>
      <CText size={15} color={Colors.grey800}>
        {title}
      </CText>
      {title === 'Status Koneksi' && (
          <CText bold size={15} color={Colors.accent3}>
          {desc}
        </CText>
      )}
      {title !== 'Status Koneksi' && (
        <CText bold size={15} color={Colors.grey800}>
            {desc}
        </CText>
      )}
    </View>
);


const _renderInfoProfile = (profileState: ProfileStateType) => (
  <View style={styles.renderInfoContainer}>
    {_renderItemInfo('Nama Lengkap', profileState.fullname)}
    {_renderItemInfo('Email', profileState.email)}
    {_renderItemInfo('Hp/WA', profileState.phone)}
    {_renderItemInfo('Divisi', profileState.divisionName)}
    {_renderItemInfo('Shift Kerja', profileState.workHoursName)}
    {_renderItemInfo('Jam Masuk', `${profileState.workHoursInStart} - ${profileState.workHoursInEnd}`)}
    {_renderItemInfo('Jam Keluar', `${profileState.workHoursOutStart} - ${profileState.workHoursOutEnd}`)}
    {_renderItemInfo('Perangkat Tervalidasi', 'Redmi Note 8 Pro')}
    {_renderItemInfo('Status Biometrik', 'Terdaftar')}
    {_renderItemInfo('Status Koneksi', 'Terhubung Ke Server')}
  </View>
);

const _renderButtonLogout = () => (
    <View style={styles.buttonLogoutContainer}>
        <CButtonRegular
          titleBold
          title="LOGOUT ACCOUNT"
          color={Colors.accent4}
          onPress={() => alert('Test Logout')}
        />
    </View>
);

const _renderCardInfo = (props: Props) => (
  <View style={styles.cardInfoContainer}>
    <CCard borderRadius={5} elevation={2} style={styles.cardInfoSection}>
      <View style={styles.titleSection}>
        <CText bold size={16} color={Colors.grey800}>
          Profile Information
        </CText>
        {_renderIconConfig()}
      </View>
      <Divider orientation="horizontal" />
      {_renderInfoProfile(props.profileState)}
    </CCard>
    {_renderButtonLogout()}
  </View>
);

const _renderHeaderImageAvatar = () => {
  const {logo1} = Images;
  return (
    <Image
      source={{
        // eslint-disable-next-line max-len
        uri: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
      }}
      style={styles.avatarImage}
    />
  );
};

const _renderInfoName = (name: string, textSize: number) => (
  <CText bold color={Colors.white} size={scaleFont(textSize)}>
    {name}
  </CText>
);

const _renderHeaderSection = (props: Props) => {
  const { profileState } = props;
  return (
    <View style={styles.headerContentContainer}>
      {_renderHeaderImageAvatar()}
      <CGap height={8} />
      {_renderInfoName(profileState.fullname, 18)}
      {_renderInfoName(profileState.email, 16)}
      <CGap height={10} />
    </View>
  );
};

const getContainerProps = (containerState: ContainerState) => ({
  backgroundColor: containerState.backgroundColor,
  barColor: containerState.barColor,
  barType: containerState.barType,
  style: styles.container,
});

const ProfileScreenComponent = (props: Props) => {
  const hookContainer = useHookContainerState();
  return (
    <Container scrollView {...getContainerProps(hookContainer.containerState)}>
      <View>
        {_renderHeaderSection(props)}
        {_renderCardInfo(props)}
      </View>
    </Container>
  );
};

export default ProfileScreenComponent;
