import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import HouseHome from "./HouseHome.js";
import FoodHome from "./FoodHome.js";
import MotoHome from "./MotoHome.js";
import Main from "./Main";


const Categories = ({navigation}) => {
    return (
        <View style = {styles.banner}>
            <Text style={styles.firstText}>ANGIELSKI W PIGUŁCE</Text>
            <Image source={require('../images/icon1.png')} style={styles.image}/>
            <Text style={styles.secondText}>Wybierz kategorię</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("MotoHome")} style = {styles.button}>
                <Text style = {styles.buttonText}>Podróże</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("FoodHome")} style = {styles.button}>
                <Text style = {styles.buttonText}>Jedzenie</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("HouseHome")} style = {styles.button}>
                <Text style = {styles.buttonText}>Dom</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Main")} style = {styles.buttonLogOut}>
                <Text style = {styles.textLogOut}>Wyloguj</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    banner: {
        paddingTop:20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        height:300,
        width:350,
        marginBottom: 1,
    },
    button: {
        width: '100%',
        backgroundColor: '#228B22',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    secondText: {
        padding: 10,
        fontStyle: 'italic',
        fontSize: 15,
    },
    firstText: {
        fontSize: 30,
        marginBottom: 20,
        color: '#006400',
        fontWeight: 'bold',
    },
    buttonLogOut: {
        width: '100%',
        backgroundColor: '#006400',
        padding: 8,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 5,

    },
    textLogOut: {
        color: 'white',
    },
});