import React from 'react';
import {ImageBackground, View, TouchableOpacity} from 'react-native';
import {Div, Text, Image, Input, Button, Icon} from "react-native-magnus";

const JobCard = ({title, salary, experience}) => {
    return (
        <Div
            bgImg={require('../../assets/images/backgroundFrame.jpg')}
            bgMode="cover"
            p={16}
            mr={16}
            my={8}
            rounded="xl"
            borderWidth={1}
            borderColor="inputOutline">
            <TouchableOpacity>
                <Text fontSize="xl" color="primaryLight" mb={7}>{title}</Text>
                <Text mb={7} color="normalText">Salary: {salary}</Text>
                <Text mb={7} color="normalText">Experience: {experience}</Text>
            </TouchableOpacity>
        </Div>
    );
};

export default JobCard;
