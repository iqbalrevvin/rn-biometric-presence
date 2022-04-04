/* eslint-disable no-underscore-dangle */
import React from 'react';
import RenderHomeScreen from './RenderHomeScreen';

const _getHomeScreenProps = (props, dataList) => ({
    navigation: props.navigation,
    dataList,
});

// eslint-disable-next-line max-lines-per-function
const _getListData = () => {
    const listData = [
        {
            id: 1,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockIn',
        },
        {
            id: 2,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 3,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 4,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 5,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 6,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 7,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 8,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 9,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
        {
            id: 10,
            time: '2021-05-10T11:31:54+00:00',
            type: 'ClockOut',
        },
    ];
    return listData;
};

const HomeScreen = (props) => (
    <RenderHomeScreen {..._getHomeScreenProps(props, _getListData())} />
);

export default HomeScreen;
