import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../Components/Container';

const RenderHomeScreen = () => {
    const authState = useSelector((state) => state.auth);
    return(
        <Container>
            <Text>Home Screen {JSON.stringify(authState)}</Text>
        </Container>
    );
};

export default RenderHomeScreen;
