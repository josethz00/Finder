import React from 'react';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Title = styled.Text`
    text-align: center;
    color: ${(props)=>props.theme.colors.quaternary};
    font-family: 'Roboto_500Medium';
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: 16px;
`;
export const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`;
export const MapContainer = styled.View`
    flex: 1;
    width: 100%;
    overflow: hidden;
    margin: 8px 0px;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 60px;
    border-radius: 10px;
    background-color: #1e90ff;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-family: 'Roboto_500Medium';
    font-weight: bold;
    font-size: 19px;
`;

export const ButtonWrapper = styled.View`
    margin-bottom: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

