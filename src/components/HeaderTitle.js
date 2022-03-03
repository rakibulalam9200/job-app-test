import React from 'react';

import {TouchableOpacity, View,Text} from 'react-native';
import {Div, Button,Image} from "react-native-magnus";
const HeaderTitle = () => {
    return (
        <View >
           <Image  style={{height: 40, width: 40}}/>
            <TouchableOpacity>
                <Image source={require('../../assets/images/IconLeft.png')} h={40} w={40}/>
            </TouchableOpacity>
        </View >
    );
};

export default HeaderTitle;
