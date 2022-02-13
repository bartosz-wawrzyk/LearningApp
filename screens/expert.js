import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const Expert = ({navigation}) => {
    return (
        <View style = {styles.containers}>
            <View style = {styles.tittle}>
                <Text>Jak nazywa się swiatło</Text>
            </View>
            <View style = {styles.optiones}>
                <TouchableOpacity>
                    <Text>green</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>sound</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>light</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>green</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.next}>
                <TouchableOpacity>
                    <Text>POMIŃ</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NASTĘPNE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=> navigation.navigate("Result")}>
                    <Text>KONIEC</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Expert;

const styles = StyleSheet.create({
    containers: {
        padding: 20,
        height: '100%',
        paddingTop:50,
    },
    tittle: {
        marginVertical: 16,
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

});