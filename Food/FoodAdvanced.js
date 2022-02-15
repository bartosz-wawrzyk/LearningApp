import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const FoodAdvanced = ({navigation}) => {

    return (
        <ScrollView>
            <View style = {styles.containers}>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Ciasteczka</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>cookies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>crab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>cream</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>dessert</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Pączek</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>doughnut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>dish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>dinner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>drink</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Kaczka</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>duck</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>eggs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>fish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>flour</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Owoc</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>fruit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>ham</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>garlic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>fresh</Text>
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

export default FoodAdvanced;

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