import TabNavigator from '../Routes/TabNavigator';
import SplashScreen from '../Screens/SplashScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import PresenceScreen from '~Screens/PresenceScreen';
import ProfileScreen from '~Screens/ProfileScreen';

const Screen = {
    SPLASH_SCREEN: {
        name: 'SplashScreen',
        component: SplashScreen,
    },
    WELCOME_SCREEN: {
        name: 'Welcome',
        component: WelcomeScreen,
    },
    HOME_SCREEN: {
        name: 'Home',
        component: HomeScreen,
    },
    PROFILE_SCREEN: {
        name: 'Profile',
        component: ProfileScreen,
    },
    LOGIN_SCREEN: {
        name: 'Login',
        component: LoginScreen,
    },
    INDEX_SCREEN: {
        name: 'Index',
        component: TabNavigator,
    },
    PRESENCE_SCREEN: {
        name: 'Presence',
        component: PresenceScreen,
    },
};

export default Screen;
