import React, { useState, useEffect } from 'react';
import { ToastAndroid, Alert, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

import { Container } from '../../components/index';
import { InitialSection, MainText, MainTextWrapper, InitialText, InitialIcon, CustomInput, CustomLinearGradient, Separator, SearchIcon, Item, ItemsContainer, LegendSection, Legend } from './styles';


interface ICoords{
    lat: number;
    lng: number;
}

const Home : React.FC = ()=>{

    const [icon, setIcon] = useState(true);
    const [feelings, setFeelings] = useState(false);
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);



    const navigation = useNavigation();

    var message = '';

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

    const degToRad = (deg: number)=>{ return deg * (Math.PI / 180); }

    function getDistance(position1: ICoords, position2: ICoords) {

        const Radius = 6371,
        dLat = degToRad(position2.lat - position1.lat),
        dLng = degToRad(position2.lng - position1.lng),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(degToRad(position1.lat))
                * Math.cos(degToRad(position1.lat))
                * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const final = (Radius * c * 1000)/1000;
        
        return console.log(final.toFixed(2) + 'km');

    }
    
    getDistance({lat: initialPosition[0], lng: initialPosition[1]},{lat: -23.5935655, lng: -46.7381793});

    const showToastWithGravity = () => {

        feelings ?  message = "Happy day! 😀" : message = "Sad day... 😔";

        ToastAndroid.showWithGravity(
          message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
    };

    return(
        <Container>
            <InitialSection>
                <InitialText>How are you today?</InitialText>
                <InitialIcon name={icon ? 'thumbs-up' : 'thumbs-down' } 
                    onPress={()=>{
                        setIcon(!icon); 
                        setFeelings(!feelings);
                        showToastWithGravity()
                    }} 
                />
            </InitialSection>
            <MainTextWrapper>
                <MainText>
                    Things are getting better, find here a place that you can go
                </MainText>
            </MainTextWrapper>
            <Separator />
            <CustomLinearGradient
                    colors={['#0a51FF','#1eaFFF']}
                    start={{x: 0, y: 1}} end={{x: 1, y: 1}}
            >
                <SearchIcon name="search" />
                <CustomInput placeholder="Search places..." onSubmitEditing={()=>navigation.navigate('Search')} />
            </CustomLinearGradient>
            <LegendSection>
                <Legend>Destinations near you (10km)</Legend>
            </LegendSection>
            <ItemsContainer>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>  
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=313&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1493351192532-a731983a2c30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=369&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1594660746962-9a2f9a61bad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1568992688527-e1c1894e4e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1519393420123-eaabb8e2b094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1595228385627-e022758a4ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1591716775138-017af352d778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1595417791292-6b7fa20401e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1516469069363-3e3fabeb2116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1580166338999-bc03438239c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=644&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1595230026359-aa913989fd8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Item>
                            <Image style={{width: 210, height: 210, borderRadius: 20 }} source={{ uri: 'https://images.unsplash.com/photo-1595227722264-79c52e1eb93a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=100'}}/>
                            <Text style={{zIndex: 5, top: '90%', marginLeft: 12, fontWeight: 'bold', color:'#fff', position: 'absolute', fontSize: 15}}>7.92 km</Text>
                        </Item>
                    </TouchableOpacity>
                </ScrollView>
            </ItemsContainer>
        </Container>
    );

}

export default Home;