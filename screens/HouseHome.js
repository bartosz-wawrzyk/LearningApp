import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import HouseBegginer from "../House/HouseBegginer";
import HouseAdvanced from "../House/HouseAdvanced";
import HouseExpert from "../House/HouseExpert";


const HouseHome = ({navigation}) => {

    return (
        <View style = {styles.banner}>
            <Text style={styles.firstText}>ANGIELSKI W PIGUŁCE</Text>
            <Image source={require('../images/home.png')} style={styles.image}/>
            <Text style={styles.secondText}>Wybierz poziom twoich umiejętności</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("HouseBegginer")} style = {styles.button}>
                <Text style = {styles.buttonText}>Początkujący</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("HouseAdvanced")} style = {styles.button}>
                <Text style = {styles.buttonText}>Zaawansowany</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("HouseExpert")} style = {styles.button}>
                <Text style = {styles.buttonText}>Ekspert</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HouseHome;

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
        backgroundColor: '#228B22',
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
        color: '#006400',
        fontWeight: 'bold',
    },
});