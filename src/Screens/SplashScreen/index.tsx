import React, { ReactNode } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../Services/Redux/Actions/AuthAction';
import RenderSplashScreen from './RenderSplashScreen';
import { IndexProps } from './RenderSplashScreen.type';
import Configs from './SplashScreen.config';

const SplashScreenProps = (navigation: any, authState: any, dispatch: Function) => ({
    loggedIn: authState.loggedIn,
    token: authState.token,
    setLogin: (token: string) => dispatch(loginAction(token)),
    navigation,
});

const SplashScreen = (props: IndexProps): ReactNode => {
    const authState = useSelector((state: RootStateOrAny) => state.auth);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <RenderSplashScreen {...SplashScreenProps(props.navigation, authState, dispatch)} />
        </React.Fragment>
    );
};


SplashScreen.displayName = Configs.displayName;
SplashScreen.defaultProps = Configs.defaultProps;
SplashScreen.propTypes = Configs.propTypes;

export default SplashScreen;
