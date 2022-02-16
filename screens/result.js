import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Result = ({navigation}) => {
    return (
        <View style={styles.styless}>
            <View style = {styles.results}>
                 <Text style = {styles.resultsText}>Wynik końcowy</Text>
                <Text style = {styles.good}>Poprawnych odpowiedzi: </Text>
                <Text style = {styles.wrong}>Błędnych odpowiedzi: </Text>

                <Image source={require('../images/icon2.png')} style={styles.image}/>
            </View>

            <View style = {styles.home}>
                <TouchableOpacity onPress = {()=>navigation.navigate("Categories")} style = {styles.button}>
                    <Text style = {styles.buttonText}>Strona główna</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Result;

const styles = StyleSheet.create({
    styless: {
        height: '100%',
        paddingTop: 50,
        padding: 20,
        backgroundColor: 'white',
    },
    results: {
        marginVertical: 5,
        flex: 1,
        height: 50,
        backgroundColor: '#00FF7F',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 16,
        padding: 20,
    },
    resultsText: {
        fontSize: 30,
        fontWeight: '500',
    },
    home: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent:'space-between',
        flexDirection: 'row',

    },
    button: {
        backgroundColor: '#228B22',
        padding: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
        marginTop: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    good: {
        backgroundColor: 'green',
        padding: 16,
        paddingHorizontal: 16,
        width: '90%',
        marginTop: 40,
        marginBottom: 40,
        color: 'white',
        borderRadius: 16,
    },
    wrong: {
        backgroundColor: 'red',
        width: '90%',
        color: 'white',
        borderRadius: 16,
        padding: 16,
        paddingHorizontal: 16,
    },
    image: {
        height: 100,
        width: 100,
        marginTop: 50,
    },
});