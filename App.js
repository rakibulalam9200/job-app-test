import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/screens/LoginScreen";
import AppLoading from 'expo-app-loading';
import {Pacifico_400Regular, useFonts} from "@expo-google-fonts/pacifico";
import React from "react";

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
  fonts:{
    ...DefaultTheme.fonts,
    fontFamily: 'Pacifico_400Regular'
  }
};
export default function App() {

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen  name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    //fontFamily:'Pacifico_400Regular',
  },
});
