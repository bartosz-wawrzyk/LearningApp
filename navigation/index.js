import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Begginer from "../screens/begginer";
import Advanced from "../screens/advanced";
import Expert from "../screens/expert";
import Result from "../screens/result";
import Categories from "../screens/categories";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Categories" component = {Categories} options={{headerShown:false}}/>
            <Stack.Screen name = "Home" component = {Home} options={{headerShown:false}}/>
            <Stack.Screen name = "Begginer" component = {Begginer} options={{headerShown:false}}/>
            <Stack.Screen name = "Advanced" component = {Advanced} options={{headerShown:false}}/>
            <Stack.Screen name = "Expert" component = {Expert} options={{headerShown:false}}/>
            <Stack.Screen name = "Result" component = {Result} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default MyStack;

