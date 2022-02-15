import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MotoHome from '../screens/MotoHome.js';
import MotoBegginer from "../Moto/MotoBegginer";
import MotoAdvanced from "../Moto/MotoAdvanced";
import MotoExpert from "../Moto/MotoExpert";

import HouseHome from "../screens/HouseHome";
import HouseBegginer from "../House/HouseBegginer";
import HouseAdvanced from "../House/HouseAdvanced";
import HouseExpert from "../House/HouseExpert";

import FoodHome from "../screens/FoodHome";
import FoodBegginer from "../Food/FoodBegginer";
import FoodAdvanced from "../Food/FoodAdvanced";
import FoodExpert from "../Food/FoodExpert";

import Result from "../screens/result";
import Categories from "../screens/categories";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Categories" component = {Categories} options={{headerShown:false}}/>
            <Stack.Screen name = "HouseHome" component = {HouseHome} options={{headerShown:false}}/>
            <Stack.Screen name = "FoodHome" component = {FoodHome} options={{headerShown:false}}/>
            <Stack.Screen name = "MotoHome" component = {MotoHome} options={{headerShown:false}}/>

            <Stack.Screen name = "MotoBegginer" component = {MotoBegginer} options={{headerShown:false}}/>
            <Stack.Screen name = "MotoAdvanced" component = {MotoAdvanced} options={{headerShown:false}}/>
            <Stack.Screen name = "MotoExpert" component = {MotoExpert} options={{headerShown:false}}/>

            <Stack.Screen name = "HouseBegginer" component = {HouseBegginer} options={{headerShown:false}}/>
            <Stack.Screen name = "HouseAdvanced" component = {HouseAdvanced} options={{headerShown:false}}/>
            <Stack.Screen name = "HouseExpert" component = {HouseExpert} options={{headerShown:false}}/>

            <Stack.Screen name = "FoodBegginer" component = {FoodBegginer} options={{headerShown:false}}/>
            <Stack.Screen name = "FoodAdvanced" component = {FoodAdvanced} options={{headerShown:false}}/>
            <Stack.Screen name = "FoodExpert" component = {FoodExpert} options={{headerShown:false}}/>

            <Stack.Screen name = "Result" component = {Result} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default MyStack;

