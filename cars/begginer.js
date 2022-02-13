import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const Begginer = ({navigation}) => {

    return (
        <View style = {styles.containers}>
            <View style = {styles.tittle}>
                <Text style = {styles.word}>Samochód</Text>
            </View>
            <View style = {styles.optiones}>
                <TouchableOpacity style = {styles.buttonOption}>
                    <Text style = {styles.option}>car</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonOption}>
                    <Text style = {styles.option}>apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonOption}>
                    <Text style = {styles.option}>bike</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonOption}>
                    <Text style = {styles.option}>green</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.next}>
                <TouchableOpacity style = {styles.button}>
                    <Text  style = {styles.buttonText}>POMIŃ</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                    <Text  style = {styles.buttonText}>NASTĘPNE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Begginer;

const styles = StyleSheet.create({
    containers: {
        paddingTop: 40,
        height: '100%',
        paddingHorizontal: 20,

        backgroundColor: 'white',
    },
    tittle: {
        marginVertical: 16,
        alignItems: 'center',
    },
    optiones: {
        marginVertical: 16,
        flex: 1,
    },
    next: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent:'space-between',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    word: {
        fontSize: 30,

    },
    buttonOption: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    option: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
    }
});