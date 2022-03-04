import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {ThemeProvider} from 'react-native-magnus';
import LoginScreen from "./src/screens/LoginScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import MainScreen from "./src/screens/MainScreen";
import JobsScreen from "./src/screens/JobsScreen";

const Stack = createNativeStackNavigator();

const navTheme = {
    ...DefaultTheme, colors: {
        ...DefaultTheme.colors, background: 'white',
    },
};

const theme = {
    colors: {
        normalText: '#4D4D4D', headerText: '#2B2B2B', inputOutline: '#E9E9E9', primaryLight: '#3378B1',
    }
}

export default function App() {
    return (<ThemeProvider theme={theme}>
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Main" component={MainScreen}/>
                <Stack.Screen name="Jobs" component={JobsScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
                <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>);
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        //fontFamily:'Pacifico_400Regular',
    },
});
