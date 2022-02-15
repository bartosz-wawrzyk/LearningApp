import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const FoodExpert = ({navigation}) => {

    return (
        <ScrollView>
            <View style = {styles.containers}>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Cytryna</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>lemon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>leek</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>lamb</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>lunch</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Główne danie</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>meatball</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>meat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>mackerel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>main course</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Małż jadalny</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>mussel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>loin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>noodles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>nibbles</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Grochówka</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>parsley</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>pear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>pea soup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>peach</Text>
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

export default FoodExpert;

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