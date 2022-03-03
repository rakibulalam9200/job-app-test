import React from 'react';

import {Text, View} from 'react-native';
import {Div,Button} from 'react-native-magnus';

const MainScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
            <Button onPress={() => navigation.navigate('Login')} style={{flex: 1}} my="xl">Login</Button>
            <Button onPress={() => navigation.navigate('Jobs')}  style={{flex: 1}}>Jobs Screen</Button>
        </View>
    );
};

export default MainScreen;

