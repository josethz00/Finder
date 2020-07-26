import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

import { Map, MapContainer } from './styles';

const Maps : React.FC = ()=>{

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    useEffect(()=>{
        async function loadPosition(){

            const { status } = await Location.requestPermissionsAsync();

            if(status!=='granted'){
                Alert.alert('Oooops', 'Precisamos da sua permissão para obter a localização');
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;
            setInitialPosition([latitude, longitude]);
        }

        loadPosition();

    }, []);

    return(
        <MapContainer>
            {
                initialPosition[0] !== 0 && (
                    <Map initialRegion={{latitude: initialPosition[0], longitude: initialPosition[1], latitudeDelta:0.014, longitudeDelta:0.014}}>
                                <Marker coordinate={{latitude: initialPosition[0], longitude: initialPosition[1]}}>

                                </Marker>
                    </Map>
                )
            }
        </MapContainer>
    );

}

export default Maps;