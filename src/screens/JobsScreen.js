import React from 'react';
import {View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {Div, Text, Image, Input, Button, Icon} from "react-native-magnus";
import Svg, {SvgUri} from 'react-native-svg';
import SVGImg from '../../assets/images/Filter.svg';
import HeaderTitle from "../components/HeaderTitle";
import JobCard from "../components/JobCard";

const jobs = [{
    id: 101,
    title: 'SENIOR SOFTWARE ENGINEER (PHP, Laravel)',
    salary: 'Tk. 25,000 - 45,000',
    experience: '2 Year of experience'
}, {
    id: 102,
    title: 'JUNIOR SOFTWARE ENGINEER (PHP, Laravel)',
    salary: 'Tk. 10,000 - 25,000',
    experience: '0-1 Year of experience'
}, {
    id: 103,
    title: 'JUNIOR SOFTWARE ENGINEER (PYTHON, DJANGO)',
    salary: 'Tk. 10,000 - 25,000',
    experience: '0-1 Year of experience'
}, {
    id: 104,
    title: 'SENIOR SOFTWARE ENGINEER (PYTHON, DJANGO)',
    salary: 'Tk. 25,000 - 45,000',
    experience: '2 Year of experience'
}, {
    id: 105,
    title: 'SENIOR SOFTWARE ENGINEER (PHP, Laravel)',
    salary: 'Tk. 25,000 - 45,000',
    experience: '2 Year of experience'
},]

const JobsScreen = () => {
    return (<Div ml={16} flex={1}>
        <HeaderTitle/>
        <Text mt={20} fontSize="md" color="normalText">Hey, Good Morning !</Text>

        <Div style={{flexDirection: 'row'}}>
            <Text fontSize="4xl">Find Your</Text>
            <Text fontSize="4xl" color="#0060AF"> Perfect Jobs</Text>
        </Div>

        <Div row flexWrap="wrap" mr={16} mt={10} mb={20}>
            <Input
                flex={6}
                color="#4D4D4D"
                prefix={<Icon name="search" color="#4D4D4D" fontFamily="Feather" fontSize="lg"/>}
                placeholder="Search"
                fontSize="lg"
                mr={4}
                py={6}
                rounded="lg"
            />
            <TouchableOpacity>
                <Image
                    h={50}
                    w={50}
                    source={require('../../assets/images/Filter.png')}
                />
            </TouchableOpacity>
            {/*<SVGImg width={50} height={50}/>*/}
        </Div>

        <Text fontSize="xl" fontWeight="bold" color="#2B2B2B">Mediusware Jobs</Text>

        <FlatList
            data={jobs}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return <JobCard title={item.title} salary={item.salary} experience={item.experience}/>
            }}/>
    </Div>);
};

export default JobsScreen;
