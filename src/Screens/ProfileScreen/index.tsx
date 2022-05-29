import React from 'react';
import { useQuery } from 'react-query';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '~Services/Redux/Actions/AuthAction';
import { _getAuthenticateUser } from './ProfileScreen.action';
import ProfileScreenComponent from './ProfileScreen.component';
import { IndexProps } from './ProfileScreen.type';

const _getPresenceScreenProps = (
  props: IndexProps, stateReducer: any, dispatch: any, authPropsQuery: any
) => ({
    navigation: props.navigation,
    route: props.route,
    profileState: stateReducer.profile,
    setLogout: () => dispatch(logoutAction()),
    authPropsQuery,
});

const _getFetchingAuthenticate = (stateReducer: any) => {
  const {
      data, isLoading, isSuccess, isError,
  } = useQuery(
      'authenticateQuery',
      () => _getAuthenticateUser(stateReducer.auth.token),
      {
        staleTime: 3000,
        refetchInterval: 10000,
      }
  );
  return {data, isLoading, isSuccess, isError};
};

const ProfileScreen = (props: IndexProps) => {
    const stateReducer = useSelector((state: RootStateOrAny) => state);
    const {data, isLoading, isSuccess, isError} = _getFetchingAuthenticate(stateReducer);
    const authPropsQuery = { data, isLoading, isSuccess, isError };
    const dispatch = useDispatch();
    return (
      <ProfileScreenComponent {..._getPresenceScreenProps(props, stateReducer, dispatch, authPropsQuery)} />
    );
};

export default ProfileScreen;
