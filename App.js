import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import MyStack from "./navigation";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
  return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        paddingTop:120,
        paddingHorizontal: 16,
    },
});
