import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const MotoAdvenced = ({navigation}) => {

    return (
        <ScrollView>
            <View style = {styles.containers}>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Hala odlotów</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>double room</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>departures hall</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>departures board</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>departure</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Turystyka zagraniczna</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>fully booked</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>get into a car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>gate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>foreign tourism</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Niepełne wyżywienie</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>half board</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>hit sth</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>have a knock</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>food</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Boczna droga</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>lounge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>miss a train</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>minor road</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>moped</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.next}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Result")} style = {styles.button}>
                        <Text  style = {styles.buttonText}>SPRAWDŹ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default MotoAdvenced;

const styles = StyleSheet.create({
    containers: {
        paddingTop: 40,
        height: '100%',
        paddingHorizontal: 20,

        backgroundColor: 'white',
    },
    tittle: {
        marginVertical: 5,
        alignItems: 'center',
    },
    optiones: {
        marginVertical: 5,
        flex: 1,
    },
    next: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent:'space-between',
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#006400',
        padding: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
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
        backgroundColor: '#228B22',
        paddingHorizontal: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    option: {
        fontSize: 20,
        fontWeight: '300',
        color: 'white',

    },
});