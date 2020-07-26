import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';
import * as Location from 'expo-location';
import { Container } from '../../components/index';
import styles from './styles';

import Constants from 'expo-constants';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from 'expo-vector-icons';

import axios from "axios";
import api from '../../services/api';

interface Avatar{
  uri: string;
  type: "image" | "video" | undefined;
}

interface IBGEUFResponse{
  sigla: string;
}

interface IBGECityResponse{
  nome: string;
}

const Upload : React.FC = ()=>{

  const [avatar, setAvatar] = useState<Avatar>({
    uri: '',
    type: 'image'
  });

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedUf, setSelectedUf] = useState('0');

  const navigation = useNavigation();

  async function imagePickerCall() {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    const f_data = {
      uri: data.uri,
      type: data.type
    }

    setAvatar(f_data);
  }

  async function cameraCall() {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    const f_data = {
      uri: data.uri,
      type: data.type
    }

    setAvatar(f_data);
  }


  async function navigateToModal() {
    const data = new FormData();

    if(!avatar.uri || !initialPosition[0] || !initialPosition[1]){
      return;
    }

    data.append("uri", avatar.uri);
    data.append("type", String(avatar.type));
    data.append("city", selectedCity);
    data.append("uf", selectedUf);

    const filledData = {
      data,
      initialPosition,
    }

    navigation.navigate("Modal", filledData)

  }

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

  useEffect(()=>{
      api.get('/posts').then(response=>{
          console.log(response)
      })
  }, [])

  useEffect(()=>{
      axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response=>{
          const ufInitials = response.data.map(uf=>uf.sigla);
          setUfs(ufInitials);
      });
  }, []);
  useEffect(()=>{
      axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response=>{
          const cityNames = response.data.map(city=>city.nome);
          setCities(cityNames);
      });
  }, [selectedUf]);


    return(
        <Container>
            <View style={styles.container}>

                {
                  avatar.uri 
                  ? 
                    <Image source={{uri: avatar.uri}} style={styles.avatar}/> 
                  :
                    <Image source={require('../../images/directions.png')} style={styles.avatar}/> 
                }
                <View style={styles.selectObjs}>
                    <TouchableOpacity style={styles.buttonIcon} onPress={cameraCall}>
                        <MaterialIcons name="camera-alt" size={30} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIcon} onPress={imagePickerCall}>
                        <MaterialIcons name="photo-library" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.select}>
                    <Picker style={styles.item} selectedValue={selectedCity} onValueChange={(itemValue)=> setSelectedCity(String(itemValue))}>
                        {cities.map(city=>(
                           <Picker.Item key={city} label={city} value={city} />
                        ))}
                    </Picker>
                    <Picker style={styles.item} selectedValue={selectedUf} onValueChange={(itemValue)=> setSelectedUf(String(itemValue))}>
                        {ufs.map(uf=>(
                          <Picker.Item key={uf} label={uf} value={uf} />
                        ))}
                    </Picker>                  
                </View>
                <TouchableOpacity style={avatar.uri ? styles.button : styles.disabled} onPress={navigateToModal}>
                    <Text style={styles.buttonText}>Upload image</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );

}

export default Upload;

