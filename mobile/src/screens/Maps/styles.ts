import React from 'react';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`;
export const MapContainer = styled.View`
    flex: 1;
    width: 100%;
    padding: 0px;
    overflow: hidden;
`;
