import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Roboto_400Regular, RobotoCondensed_300Light, RobotoCondensed_700Bold, Roboto_500Medium, useFonts, Ubuntu_500Medium, Ubuntu_400Regular, Ubuntu_300Light } from '@expo-google-fonts/dev'

import light from './src/styles/themes/light';
import dark from './src/styles/themes/dark';
import Routes from './src/routes';
import usePersistedState from './src/utils/usePersistedState';


export default function App() {

  const [theme, setTheme] = usePersistedState('theme', light);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    RobotoCondensed_300Light,
    RobotoCondensed_700Bold,
    Roboto_500Medium,
    Ubuntu_500Medium,
    Ubuntu_400Regular,
    Ubuntu_300Light
  })
  const toggleTheme = ()=>{
    setTheme(theme.title == 'light' ? dark : light)
  }
  
  if(!fontsLoaded)
      return <AppLoading />;

  return (
      <ThemeProvider theme={theme}>
        <StatusBar animated={true} backgroundColor={theme.colors.statusBar} style={theme.title=='light' ? 'dark' : 'light'} />
        <Routes toggleTheme={toggleTheme} />
      </ThemeProvider>
  );
}
