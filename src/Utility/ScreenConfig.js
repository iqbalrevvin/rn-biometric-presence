/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import TabNavigator from '../Routes/TabNavigator';
import WelcomeScreen from '../Screens/WelcomeScreen';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';

const Screen = {
    WELCOME_SCREEN: {
        name: 'Welcome',
        component: WelcomeScreen,
    },
    HOME_SCREEN: {
        name: 'Home',
        component: HomeScreen,
    },
    LOGIN_SCREEN: {
        name: 'Login',
        component: LoginScreen,
    },
    INDEX_SCREEN: {
        name: 'Index',
        component: TabNavigator,
    },
};

export default Screen;
