import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
import CButtonRegular from '~Components/Buttons/CButtonRegular';
import CCard from '~Components/CCard';
import CGap from '~Components/CGap';
import Container from '~Components/Container';
import {
  ContainerState,
  HookContainerState,
} from '~Components/Container/Container.type';
import CText from '~Components/CText';
import {Images, Screen} from '~Utility';
import Colors from '~Utility/Colors';
import {scaleFont, scaleHeight} from '~Utility/Size';
import styles from './ProfileScreen.styles';
import {HookConnectionState, ProfileStateType, Props} from './ProfileScreen.type';
import AlertGeneral from '~Components/AlertGeneral';

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

const _useHookConnectionState = (): HookConnectionState => {
  const [connect, setConnect] = React.useState(null);
  return { connect, setConnect };
};

const _getInfoConnectionEffect = (props: Props, hookConnection: HookConnectionState) => {
  const { setConnect } = hookConnection;
  const checkConnectionToServer = props.authPropsQuery?.data?.success;
  const connectToServer = checkConnectionToServer || false;
  React.useEffect(() => {
    NetInfo.addEventListener(state => {
      const isConected = state.isConnected;
      if (isConected){
        setTimeout(() => setConnect(connectToServer),750);
      } else setConnect(null); setTimeout(() => setConnect(false),500);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectToServer]);
};

const _renderIconConfig = () => (
  <TouchableOpacity onPress={() => {}}>
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
    <CText size={15} color={Colors.grey800}>{title}</CText>
    {title === 'Status Koneksi' && (
      <CText bold size={15} color={Colors.accent3} style={styles.descSection}>
        {desc}
      </CText>
    )}
    {title !== 'Status Koneksi' && (
      <CText bold size={15} color={Colors.grey800} style={styles.descSection}>
          {desc}
      </CText>
    )}
  </View>
);

const _renderBiometricStatusInfo = (title: string, desc: string) => (
  <View style={styles.infoProfileSection}>
    <CText size={15} color={Colors.grey800}>
      {title}
    </CText>
    <CText bold
      style={styles.descSection}
      size={15} color={desc ? Colors.accent3 : Colors.accent4}
    >
      {desc ? 'Terdaftar' : 'Belum Terdaftar'}
    </CText>
  </View>
);

const _renderTextStatusConnected = (connect: boolean) => {
  switch (connect) {
    case true:
      return 'Terhubung Ke Server';
    case false:
      return 'Terputus Ke Server';
    default:
      return 'Menghubungkan';
  }
};

const _renderConnectionInfo = (title: string, connect: boolean) => (
  <View style={styles.infoProfileSection}>
    <CText size={15} color={Colors.grey800}>
      {title}
    </CText>
    <CText bold
      style={styles.descSection}
      size={15} color={connect ? Colors.accent3 : Colors.accent4}
    >
      {_renderTextStatusConnected(connect)}
    </CText>
  </View>
);


const _renderInfoProfile = (profileState: ProfileStateType, connect: boolean) => (
  <View style={styles.renderInfoContainer}>
    {_renderItemInfo('Nama Lengkap', profileState.fullname)}
    {_renderItemInfo('Email', profileState.email)}
    {_renderItemInfo('Hp/WA', profileState.phone)}
    {_renderItemInfo('Divisi', profileState.divisionName)}
    {_renderItemInfo('Shift Kerja', profileState.workHoursName)}
    {_renderItemInfo('Jam Masuk', `${profileState.workHoursInStart} - ${profileState.workHoursInEnd}`)}
    {_renderItemInfo('Jam Keluar', `${profileState.workHoursOutStart} - ${profileState.workHoursOutEnd}`)}
    {_renderItemInfo('Perangkat Tervalidasi', `${profileState.deviceName}`)}
    {_renderBiometricStatusInfo('Status Biometrik', `${profileState.biometricId}`)}
    {_renderConnectionInfo('Status Koneksi', connect)}
  </View>
);

const _getLogoutProps = (props: Props) => ({
  title: 'Logout Account',
  desc: 'Anda yakin untuk mengeluarkan akun ini?',
  trueText: 'Ya, Keluar',
  falseText: 'Batal',
  onTrue: () => {
    props.setLogout();
    props.navigation.replace(Screen.SPLASH_SCREEN.name);
  },
});

const _renderButtonLogout = (props: Props) => (
    <View style={styles.buttonLogoutContainer}>
      <CButtonRegular
        onPress={() =>  AlertGeneral(_getLogoutProps(props))}
        titleBold
        title="LOGOUT ACCOUNT"
        color={Colors.accent4}
      />
    </View>
);

const _renderCardInfo = (props: Props, connect: boolean) => (
  <View style={styles.cardInfoContainer}>
    <CCard borderRadius={5} elevation={2} style={styles.cardInfoSection}>
      <View style={styles.titleSection}>
        <CText bold size={16} color={Colors.grey800}>
          Profile Information
        </CText>
        {_renderIconConfig()}
      </View>
      <Divider orientation="horizontal" />
      {_renderInfoProfile(props.profileState, connect)}
    </CCard>
    {_renderButtonLogout(props)}
  </View>
);

const _renderHeaderImageAvatar = (props: Props) => {
  const {avatarMale, avatarFemale} = Images;
  const {profileState} = props;
  return (
    <Image
      source={profileState.gender === 'Laki-laki' ? avatarMale : avatarFemale}
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
      {_renderHeaderImageAvatar(props)}
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
  const connectionState = _useHookConnectionState();
  _getInfoConnectionEffect(props, connectionState);
  return (
    <Container scrollView {...getContainerProps(hookContainer.containerState)}>
      <View>
        {_renderHeaderSection(props)}
        {_renderCardInfo(props, connectionState.connect)}
      </View>
    </Container>
  );
};

export default ProfileScreenComponent;
