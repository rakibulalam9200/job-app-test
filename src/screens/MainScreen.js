import React from 'react';

import {Text, View} from 'react-native';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import ForgetPasswordScreen from "./ForgetPasswordScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },

};


const MainScreen = () => {
    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator>
                <Stack.Screen  name="Login" component={LoginScreen} />
                <Stack.Screen  name="ForgetPassword" component={ForgetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainScreen;
