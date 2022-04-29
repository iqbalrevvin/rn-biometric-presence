import React from 'react';
import { RootStateOrAny, useSelector }  from 'react-redux';
import { _getAttendanceLogs } from './HomeScreen.action';
import { IndexProps, UseQueryProps } from './HomeScreen.type';
import RenderHomeScreen from './RenderHomeScreen';
import { useInfiniteQuery } from 'react-query';

const _getHomeScreenProps = (
  props: IndexProps,
  stateReducer: any,
  useQueryProps: UseQueryProps,
) => ({
  navigation: props.navigation,
  profileState: stateReducer.profile,
  attendanceQuery: useQueryProps,
});

const _handleNextPageRequest = (lastPage: any) => {
  if (lastPage?.output_data?.next_page_url != null) {
    return lastPage.output_data.current_page + 1;
  }
};

const _useFetchingQuery = (stateReducer: any) => {
    const {
        data, isLoading, refetch, hasNextPage,
        fetchNextPage, isFetching, isFetchingNextPage,
        status, error,
    } = useInfiniteQuery(
        'attendanceLogs',
        ({pageParam}) => _getAttendanceLogs(pageParam, stateReducer.auth.token),
        { getNextPageParam: (lastPage) => _handleNextPageRequest(lastPage) }
    );
    return {
        data, refetch, hasNextPage, fetchNextPage, isFetching,
        isFetchingNextPage, isLoading, status, error,
    };
};

const HomeScreen = (props: IndexProps) => {
  const stateReducer = useSelector((state: RootStateOrAny) => state);
  const {
      data, refetch, hasNextPage, fetchNextPage, isFetching,
      isFetchingNextPage, isLoading, status, error,
    } = _useFetchingQuery(stateReducer);
  const useQueryProps = {
      data, refetch, hasNextPage, fetchNextPage, isFetching,
      isFetchingNextPage, isLoading, status, error,
    };
  return (
    <RenderHomeScreen {..._getHomeScreenProps(props, stateReducer, useQueryProps)}
    />
  );
};

export default HomeScreen;
