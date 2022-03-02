import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import { ThemeProvider } from 'react-native-magnus';
import LoginScreen from "./src/screens/LoginScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";

const Stack = createNativeStackNavigator();

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },

};

export default function App() {

  return (
      <ThemeProvider>
          <NavigationContainer theme={navTheme}>
              <Stack.Navigator>
                  <Stack.Screen  name="Login" component={LoginScreen} />
                  <Stack.Screen  name="ForgetPassword" component={ForgetPasswordScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </ThemeProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    //fontFamily:'Pacifico_400Regular',
  },
});
