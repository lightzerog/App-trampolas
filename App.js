import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { Text } from 'react-native';

import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold
} from '@expo-google-fonts/dancing-script';
import {
  Lobster_400Regular
} from '@expo-google-fonts/lobster';

import { useFonts } from 'expo-font';

import Home from './Home.js';
import Buscar from './Buscar.js';
import Perfil from './Perfil.js';
import Login from './Login.js';
import Cadastro from './Cadastro.js'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'trampolas',
            headerStyle: {
              backgroundColor: '#E9E9FF',
              borderBottomLeftRadius:0,
              borderBottomRightRadius:0,
            },
            headerTitleStyle: {
              color: '#0000A5',
              fontSize: 24,
              fontFamily: 'Lobster_400Regular',
            },
          }}
        />
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
        <Stack.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};