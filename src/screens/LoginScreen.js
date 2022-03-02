import React from 'react';

import {Text, View,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
//import {TextInput} from 'react-native-paper';
import TextBox from 'react-native-password-eye';
import {Touchable} from "react-native-web";
import Eye from 'react-native-vector-icons/Feather';
//import { TextInput } from 'react-native-paper';
//import { AppLoading } from 'expo';

//import {useFonts,Montserrat_400Regular,Montserrat_500Medium,Montserrat_300Light,Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';

//import {useFonts,Pacifico_400Regular} from "@expo-google-fonts/pacifico";

const LoginScreen = () => {


    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/login.png')} style={styles.image}/>
            <Text style={styles.textStyle}>Hello,{"\n"}Good to see you again!</Text>
            <Text style={{...styles.contentTextStyle,marginBottom:20}}>Log in to get going with our recruitment process!</Text>
            <Text style={{marginBottom:6}}>Email Address</Text>
            <TextInput
                style ={styles.textInputStyle}
                placeholder="email@mail.com"
                type
            />
            <Text style={{marginBottom:6}}>Password</Text>
            <View style={{...styles.textInputStyle,...styles.passwordContainer}}>
                <TextInput
                    style={{flex:1}}
                    placeholder="Input Password"
                    secureTextEntry={true}

                    // right={<TextInput.Icon name="eye-outline" color="#4D4D4D" />}
                />
                <Eye name="eye" size={14} style={{alignSelf: 'center',marginRight:10}}></Eye>
            </View>


            <TouchableOpacity onPress={()=> }>
                <Text style={styles.forgotPasswordStyle}>Forgot Password?</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                    <Text style={styles.buttonStyle}>Login</Text>
            </TouchableOpacity>

        </View>

    );
};
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 16,
        marginTop: 20,

    },
    image:{
        height: 80,
        width: 80,

    },
    textStyle:{
        fontSize: 24,
        marginTop: 20,
        color:'#2B2B2B'

    },
    contentTextStyle:{
        fontSize: 14,
        color: '#4D4D4D'
    },

    textInputStyle:{
        fontSize: 14,
        borderColor: '#E9E9E9',
        borderRadius: 5,
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 16,
        marginBottom:15,


    },
    forgotPasswordStyle:{
        fontSize:14,
        alignSelf:"flex-end",
        color: '#004D8C',
        marginBottom: 50,
    },
    buttonStyle:{
        width:'100%',
        textAlign:'center',
        height:43,
        backgroundColor:'#0060AF',
        paddingVertical:8,
        borderRadius:10,
        fontWeight:'bold',
        color:'white'
    },
    passwordContainer:{
        flexDirection:'row',
    }
})
export default LoginScreen;
