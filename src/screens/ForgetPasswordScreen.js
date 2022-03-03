import React from 'react';

import {View} from 'react-native';
import {Div, Text, Image, Input, Button} from "react-native-magnus";
import HeaderTitle from "../components/HeaderTitle";

const ForgetPasswordScreen = ({navigation}) => {
    return (
        <Div ml={16} style={{paddingTop: Platform.OS === 'android' ? 25 : 0}}>

            <Image h={80}
                   w={80}
                   my={20}
                   source={require('../../assets/images/login.png')}
            >

            </Image>
            <Text fontSize="4xl" mb={8} color="headerText">Forgot Password?</Text>
            <Div color="normalText">
                <Text fontSize="lg" mb={20}>Log in to get going with our recruitment process!</Text>
                <Text fontSize="lg" mb={8}>Email Address</Text>
                <Input focusBorderColor="inputOutline" placeholder="email@mail.com" mr={16} rounded="lg" fontSize="lg"/>
            </Div>

            <Div row flexWrap="wrap" mt={40} mr={16}>
                <Button
                    onPress={()=> navigation.navigate('Login')}
                    flex={1}
                    h={48}
                    py="lg"
                    bg="white"
                    borderWidth={1}
                    borderColor="inputOutline"
                    color="primaryLight"
                    fontWeight="bold"
                    rounded="lg"
                    underlayColor="red100"
                    mr={8}
                >Login</Button>

                <Button
                    onPress={()=> navigation.navigate('ResetPassword')}
                    flex={3}
                    h={48}
                    py="lg"
                    bg="primaryLight"
                    color="white"
                    borderWidth={1}
                    borderColor="inputOutline"
                    fontWeight="bold"
                    rounded="lg"
                    underlayColor="red100"
                >Forgot Password</Button>

            </Div>
        </Div>
    );
};

export default ForgetPasswordScreen;
