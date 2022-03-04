import React from 'react';
import {View, Platform} from 'react-native';
import {Div, Text, Image, Input, Button, Icon} from "react-native-magnus";

const ResetPasswordScreen = ({navigation}) => {
    return (<Div ml={16} style={{paddingTop: Platform.OS === 'android' ? 25 : 0,}}>
        <Image h={80}
               w={80}
               my={20}
               source={require('../../assets/images/login.png')}>
        </Image>

        <Text fontSize="4xl" mb={8} color="headerText">Reset Your Password</Text>

        <Div color="normalText">
            <Text fontSize="lg" mb={20}>We've send you an email with OTP code, please fill the form bellow and hit
                enter to reset your password</Text>
            <Text fontSize="lg" mb={8}>Email Address</Text>
            <Input focusBorderColor="inputOutline" placeholder="email@mail.com" mr={16} rounded="lg" fontSize="lg"/>
        </Div>

        <Div color="normalText">
            <Text fontSize="lg" mb={8} mt="lg">OTP Code</Text>
            <Input focusBorderColor="inputOutline" placeholder="OTP Code" mr={16} rounded="lg" fontSize="lg"/>
        </Div>

        <Div color="normalText">
            <Text fontSize="lg" mb={8} mt="lg">Password</Text>
            <Input focusBorderColor="inputOutline" placeholder="New Password" mr={16} rounded="lg" fontSize="lg"
                   secureTextEntry
                   suffix={
                       <Icon name="eye" fontSize={18} color="normalText" fontFamily="Feather"/>}
            />
        </Div>

        <Div color="normalText">
            <Text fontSize="lg" mb={8} mt="lg">Re-Type Password</Text>
            <Input focusBorderColor="inputOutline" placeholder="Re-Type New Password" mr={16} rounded="lg"
                   fontSize="lg"
                   secureTextEntry
                   suffix={<Icon name="eye" fontSize={18} color="normalText" fontFamily="Feather"/>}
            />
        </Div>

        <Div row flexWrap="wrap" mt={40} mr={16}>
            <Button
                onPress={() => navigation.navigate('Login')}
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
            >Reset Password</Button>
        </Div>
    </Div>);
};

export default ResetPasswordScreen;
