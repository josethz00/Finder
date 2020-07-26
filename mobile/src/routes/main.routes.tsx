import React, { useState } from 'react';
import { Image, View, Switch } from 'react-native';
import { MaterialIcons } from 'expo-vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Modal from '../screens/Modal';
import Maps from '../screens/Maps';
import Search from '../screens/Search';
import Upload from '../screens/Upload';
import { ThemeProps } from './index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainRoutes : React.FC<ThemeProps> = ({
    toggleTheme
})=>{

    const[stackTheme, setStackTheme] = useState(false);
    
    const pallete = {
        backgroundColor: '',
        headerTintColor: ''
    }

    if(stackTheme){
        pallete.backgroundColor= '#001222';
        pallete.headerTintColor= '#fff';
    }
    else{ 
        pallete.backgroundColor= '#fafafa';
        pallete.headerTintColor= '#fff';
    }

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                gestureEnabled: true,
                headerStyle: {
                    height: 82,
                    backgroundColor: pallete.backgroundColor,
                },
                headerRight: ()=>(
                    <Switch
                        style={{marginRight: 5}}
                        trackColor={{ false: "#767577", true: "#5271ff" }}
                        thumbColor={ stackTheme ? "#fff" : "#333" }
                        onValueChange={()=>{toggleTheme(); setStackTheme(!stackTheme)}}
                        value={stackTheme}
                    />
                ),
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTitleAlign: 'center',
                headerTintColor: pallete.headerTintColor,
                headerBackTitleVisible: false
                }}
                headerMode='float'>
                <Stack.Screen
                    name='Home'
                    options={({ route }) => ({
                        headerTitle: ()=>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Image source={stackTheme ? require('../images/logo_dark.png') : require('../images/logo.png')} style={{
                                width: 51,
                                height: 51,
                            }} />
                        </View>,
                    })}
                >
                    {props=>
                        <Tabs   
                            theme={stackTheme}
                            backgroundColor={stackTheme ? '#001232' : '#5271ff'}
                            activeTintColor={stackTheme ? '#5774ff' : '#fff'}
                            inactiveTintColor={stackTheme ? '#aaa' : '#ccc'}
                            borderColor={stackTheme ? '#1E90FF' : '#6959CD'} 
                            caseColor={stackTheme ? '#011051': '#fafafa'}
                        />
                    }
                </Stack.Screen>
                <Stack.Screen
                    name='Search'
                    options={({ route }) => ({
                        headerTitle: ()=>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Image source={stackTheme ? require('../images/logo_dark.png') : require('../images/logo.png')} style={{
                                width: 51,
                                height: 51,
                            }} />
                        </View>,
                    })}
                >
                    {props=>
                        <Search />
                    }
                </Stack.Screen>
                <Stack.Screen
                    name='Modal'
                    options={({ route }) => ({
                        headerTitle: ()=>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Image source={stackTheme ? require('../images/logo_dark.png') : require('../images/logo.png')} style={{
                                width: 51,
                                height: 51,
                            }} />
                        </View>,
                    })}
                >
                    {props=>
                        <Modal />
                    }
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export interface Props{
    theme: boolean;
    backgroundColor: string;
    activeTintColor: string;
    inactiveTintColor: string;
    borderColor: string;
    caseColor: string;
}

const Tabs : React.FC<Props> = ({
    backgroundColor,
    activeTintColor,
    inactiveTintColor,
    borderColor,
    caseColor,
})=>{

    return(
            <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor,
                        inactiveTintColor,
                        labelStyle:{
                            fontSize: 12,
                            fontWeight: 'bold'
                        },
                        style: {
                            backgroundColor,
                            height: 55,
                            borderWidth: 0,
                        }
                    }}
                >

                <Tab.Screen name='Home' options={{tabBarIcon:({color})=>
                            <MaterialIcons color={color} name="home" size={28}/>}}  
                >
                    {props=> <Home/>}
                </Tab.Screen>

                <Tab.Screen name='Upload' options={{ title:"" , tabBarIcon:({color})=>
                            <View 
                                style={{display: "flex", 
                                    flex: 1, 
                                    position: 'absolute', 
                                    top: -25, 
                                    backgroundColor: caseColor, 
                                    borderWidth:2 , 
                                    borderColor, 
                                    borderRadius: 90, 
                                    padding:13
                                }}
                            >
                                <MaterialIcons color={borderColor} name="add" size={30}/>
                            </View>                  
                        }}  
                >
                    {props=> <Upload/>}
                </Tab.Screen>

                <Tab.Screen name='Maps' options={{ tabBarIcon:({color})=>
                            <MaterialIcons color={color} name="room" size={28}/>}}  
                >
                    {props=> <Maps/>}
                </Tab.Screen>

            </Tab.Navigator>
    );

}

export default MainRoutes;