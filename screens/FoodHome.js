import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FoodBegginer from "../Food/FoodBegginer";
import FoodAdvanced from "../Food/FoodAdvanced";
import FoodExpert from "../Food/FoodExpert";
import Categories from "./categories";

const FoodHome = ({navigation}) => {
    return (
        <View style = {styles.banner}>
            <Text style={styles.firstText}>ANGIELSKI W PIGUŁCE</Text>
            <Image source={require('../images/home.png')} style={styles.image}/>
            <TouchableOpacity onPress={()=>navigation.navigate("FoodWords")} style = {styles.buttonWords}>
                <Text style = {styles.buttonText}>Nauka słówek</Text>
            </TouchableOpacity>
            <Text style={styles.secondText}>Wybierz poziom twoich umiejętności</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("FoodBegginer")} style = {styles.button}>
                <Text style = {styles.buttonText}>Początkujący</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("FoodAdvanced")} style = {styles.button}>
                <Text style = {styles.buttonText}>Zaawansowany</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("FoodExpert")} style = {styles.button}>
                <Text style = {styles.buttonText}>Ekspert</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Categories")} style = {styles.buttonLogOut}>
                <Text style = {styles.textLogOut}>Cofnij</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FoodHome;

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
        height:250,
        width:250,
        marginBottom: 15,
    },
    button: {
        width: '100%',
        backgroundColor: '#228B22',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonWords: {
        width: '100%',
        backgroundColor: '#228B22',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
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
        marginBottom: 10,
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