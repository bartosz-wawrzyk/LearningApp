import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Home from "./home";
import Advanced from "./advanced";
import Expert from "./expert";

const Categories = ({navigation}) => {
    return (
        <View style = {styles.banner}>
            <Text style={styles.firstText}>ANGIELSKI W PIGUŁCE</Text>
            <Image source={require('../images/iconcategories.png')} style={styles.image}/>
            <Text style={styles.secondText}>Wybierz poziom twoich umiejętności</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style = {styles.button} id = {1}>
                <Text style = {styles.buttonText}>Motoryzacja</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style = {styles.button}>
                <Text style = {styles.buttonText}>Jedzenie</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style = {styles.button}>
                <Text style = {styles.buttonText}>Dom</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    banner: {
        paddingTop:50,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        height:250,
        width:250,
        marginBottom: 15,
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',

        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    secondText: {
        padding: 20,
        fontStyle: 'italic',
        fontSize: 15,
    },
    firstText: {
        fontSize: 30,
        marginBottom: 20,
    },
});