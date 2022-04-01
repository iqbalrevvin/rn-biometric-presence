import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CButtonRegular from '../../Components/Buttons/CButtonRegular';
import CCard from '../../Components/CCard';
import CInput from '../../Components/CInput';
import Container from '../../Components/Container';
import CText from '../../Components/CText';
import VersionText from '../../Components/VersionText';
import { Colors, Images } from '../../Utility';
import styles from './LoginScreen.styles';

const RenderLoginScreen = () => {
    const { bgImage1 } = Images;
    return (
        <Container scrollView backgroundColor={Colors.white} barColor={Colors.primary} barType='light'>
            <View style={styles.bgContainer}>
                <Image source={bgImage1} style={styles.imageSection} />
            </View>
            <View style={styles.formContainer}>
                <CCard borderRadius={5} elevation={2}>
                    <View style={styles.formSection}>
                        <View style={styles.formTitleContainer}>
                            <CText bold color={Colors.grey700} size={20}>BIOMETRIC PRESENCE</CText>
                            <CText semiBold color={Colors.grey700} size={17}>Signin Account</CText>
                        </View>
                        <View style={styles.formInputSection}>
                            <CInput
                                label={'Username / Email'}
                                placeholder={'yourmail@example.com'}
                                leftIconName={'user'}
                            />
                            <CInput
                                label={'Password'}
                                placeholder={'Secret Password'}
                                leftIconName={'unlock'}
                                isPassword={true}
                            />
                            <View style={styles.forgotPasswordSection}>
                                <TouchableOpacity>
                                    <CText color={Colors.primary} size={14}>Forgot Password?</CText>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <CButtonRegular titleBold title='LOGIN ACCOUNT' color={Colors.primary} />
                            </View>
                        </View>
                    </View>
                </CCard>
            </View>
            <VersionText />
        </Container>
    );
};

export default RenderLoginScreen;
