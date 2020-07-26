import React, { useState } from 'react';
import {  } from 'react-native';
import { Container } from '../../components/index';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Marker, MapEvent } from 'react-native-maps';
import { Title, MapContainer, Map, Button, ButtonWrapper, ButtonText } from './styles';

interface Params{
    data: object;
    initialPosition: [number, number];
}


const Modal : React.FC = ()=>{

    const route = useRoute();
    const routeParams = route.params as Params;
    const navigation = useNavigation();

    const [position, setPosition] = useState<[number, number]>([routeParams.initialPosition[0],  routeParams.initialPosition[1]]);

    function handleMapClick(event: MapEvent){
        setPosition([event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude]);
    }

    return(
        <Container>
            <Title>Mark on the map above the place that you are registering</Title>
            <MapContainer>
                <Map initialRegion={{latitude: position[0], longitude: position[1], latitudeDelta:0.014, longitudeDelta:0.014}} onPress={handleMapClick}>
                    <Marker coordinate={{latitude: position[0], longitude: position[1]}}>

                    </Marker>
                </Map>
            </MapContainer>
            <ButtonWrapper>
                <Button onPress={()=>{
                    navigation.navigate("Home", {screen: "Home"});
                    alert("Point registered with success!");
                }}>
                    <ButtonText>Finish</ButtonText>
                </Button>
            </ButtonWrapper>
        </Container>
    );

}

export default Modal;

/*
<View style={styles.mapContainer}>
                    { initalPosition[0] !== 0 && (
                         <MapView style={styles.map} initialRegion={{latitude: initalPosition[0], longitude: initalPosition[1], latitudeDelta:0.014, longitudeDelta:0.014}} >
                            
                                {points.map(point=>(
                                    <Marker key={String(point.id)} coordinate={{latitude: point.latitude, longitude: point.longitude}} style={styles.mapMarker} onPress={()=>handleNavigateToDetail(point.id)}>
                                        <View style={styles.mapMarkerContainer}>
                                            <Image source={{ uri: point.image_url }} style={styles.mapMarkerImage} />
                                            <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                                        </View>
                                    </Marker>
                                ))}
                            
                        </MapView>
                    ) }
                </View>
*/