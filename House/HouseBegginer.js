import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const HouseBegginer = ({navigation}) => {

    return (
        <ScrollView>
            <View style = {styles.containers}>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Mieszkanie</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>apartament</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>angle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>a bed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>attic</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Sypialnia</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>bedroom</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>bedsit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>bell</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>bidet</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Półka na książki</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>bowl</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>brick</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>bunk bed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>bookshelf</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Alarm antywłamaniowy</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>burglar alarm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>cabinet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>chalet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>cleaners</Text>
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

export default HouseBegginer;

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

    }
});