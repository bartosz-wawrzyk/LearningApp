import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MotoHome from '../screens/MotoHome.js';
import MotoBegginer from "../Moto/MotoBegginer";
import MotoAdvanced from "../Moto/MotoAdvanced";
import MotoExpert from "../Moto/MotoExpert";
import MotoWords from "../Moto/MotoWords";

import HouseHome from "../screens/HouseHome";
import HouseBegginer from "../House/HouseBegginer";
import HouseAdvanced from "../House/HouseAdvanced";
import HouseExpert from "../House/HouseExpert";
import HouseWords from "../House/HouseWords";

import FoodHome from "../screens/FoodHome";
import FoodBegginer from "../Food/FoodBegginer";
import FoodAdvanced from "../Food/FoodAdvanced";
import FoodExpert from "../Food/FoodExpert";
import FoodWords from "../Food/FoodWords";

import Result from "../screens/result";
import Categories from "../screens/categories";
import Main from "../screens/Main"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer independent={true}>
        <Stack.Navigator>
            {/*<Stack.Screen name = "Main" component={Main} options={{headerShown: false}} />*/}
            <Stack.Screen name = "Categories" component = {Categories} options={{headerShown:false}}/>
            <Stack.Screen name = "HouseHome" component = {HouseHome} options={{headerShown:false}}/>
            <Stack.Screen name = "FoodHome" component = {FoodHome} options={{headerShown:false}}/>
            <Stack.Screen name = "MotoHome" component = {MotoHome} options={{headerShown:false}}/>

            <Stack.Screen name = "MotoBegginer" component = {MotoBegginer} options={{headerShown:false}}/>
            <Stack.Screen name = "MotoAdvanced" component = {MotoAdvanced} options={{headerShown:false}}/>
            <Stack.Screen name = "MotoExpert" component = {MotoExpert} options={{headerShown:false}}/>
            <Stack.Screen name = "MotoWords" component = {MotoWords} options={{headerShown:false}}/>

            <Stack.Screen name = "HouseBegginer" component = {HouseBegginer} options={{headerShown:false}}/>
            <Stack.Screen name = "HouseAdvanced" component = {HouseAdvanced} options={{headerShown:false}}/>
            <Stack.Screen name = "HouseExpert" component = {HouseExpert} options={{headerShown:false}}/>
            <Stack.Screen name = "HouseWords" component = {HouseWords} options={{headerShown:false}}/>

            <Stack.Screen name = "FoodBegginer" component = {FoodBegginer} options={{headerShown:false}}/>
            <Stack.Screen name = "FoodAdvanced" component = {FoodAdvanced} options={{headerShown:false}}/>
            <Stack.Screen name = "FoodExpert" component = {FoodExpert} options={{headerShown:false}}/>
            <Stack.Screen name = "FoodWords" component = {FoodWords} options={{headerShown:false}}/>

            <Stack.Screen name = "Result" component = {Result} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;

