import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Result = ({navigation}) => {
    return (
        <View style={styles.styless}>
            <View style = {styles.results}>
                 <Text>this is result</Text>
            </View>

            <View style = {styles.home}>
                <TouchableOpacity onPress = {()=>navigation.navigate("Home")} style = {styles.button}>
                    <Text style = {styles.buttonText}>Powrót</Text>
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
    },
    results: {
        marginVertical: 5,
        flex: 1,
    },
    home: {
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
        width: '100%',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});