import React from 'react';

import {View} from 'react-native';
import {Div,Text, Image, Input, Button} from "react-native-magnus";
import HeaderTitle from "../components/HeaderTitle";

const JobsScreen = () => {
    return (
        <Div ml={16}>
            <HeaderTitle/>
            <Text mt={20} fontSize="md" color="normalText">Hey, Good Morning !</Text>

            <Div style={{flexDirection:'row'}}>
                <Text fontSize="4xl">Find Your</Text>
                <Text fontSize="4xl" color="#0060AF"> Perfect Jobs</Text>
            </Div>

        </Div>
    );
};

export default JobsScreen;
