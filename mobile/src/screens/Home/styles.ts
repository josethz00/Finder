import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from 'expo-vector-icons';



export const InitialSection = styled.View`
    display: flex;
    flex-direction: row;
    margin: 25px 15px;
    justify-content: space-between;
    align-items: center;
`;

export const InitialText = styled.Text`
    color: ${(props)=> props.theme.colors.secText};
    font-size: 17px;
    font-family: 'RobotoCondensed_300Light'
`;

export const InitialIcon = styled(Feather)`
    color: ${(props)=> props.theme.colors.secText};
    font-size: 23px;
`;


export const MainTextWrapper = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 30px;
`;

export const MainText = styled.Text`
    font-family: 'Ubuntu_300Light';
    color: ${(props)=> props.theme.colors.secText};
    font-size: 30px;
`;

export const Separator = styled.View`
    margin: 20px;
`;

export const SearchIcon = styled(Feather)`
    color: ${(props)=> props.theme.colors.quaternary};
    left: 25px;
    z-index:3;
    font-size: 15px;
`;

export const CustomInput = styled.TextInput`
    height: 42px;
    width: 99%;
    padding: 0 35px;
    left: -7.8px;
    overflow: hidden;
    background-color: ${(props)=> props.theme.colors.statusBar};
    border-radius: 40px;
    margin: 0px 8px 0px 8px;
`;

export const CustomLinearGradient = styled(LinearGradient)`
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px 4%;
    border-radius: 40px;
`;

export const ItemsContainer = styled.View`
    flex-direction: row;
    top: 55%;
    padding: 0px 20px;
`;

export const Item = styled.View`
    border-radius: 20px;
    background-color: #ccc;
    width: 210px;
    margin-right: 15px;
    height: 210px;
`;

export const LegendSection = styled.View`
    display: flex;
    top: 28%;
    margin: 0px 6%;
`;

export const Legend = styled.Text`
    color: #1E90FF;
    font-family: 'RobotoCondensed_700Bold';
    font-size: 20px;
`;