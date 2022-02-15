import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';


const MotoBegginer = ({navigation}) => {


    const [color,setColor]=useState("#228B22");


        return (
            <ScrollView>
                <View style={styles.containers}>

                    <View style={styles.tittle}>
                        <Text style={styles.word}>Samochód</Text>
                    </View>
                    <View style={styles.optiones}>
                        {/*<TouchableOpacity style={{backgroundColor: color}} onPress={()=>{setColor("black")}}>*/}
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>car</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>cabin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>bike</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>caravan</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tittle}>
                        <Text style={styles.word}>Kajak</Text>
                    </View>
                    <View style={styles.optiones}>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>Car park</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>carriage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>canoe</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>flight</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tittle}>
                        <Text style={styles.word}>Wypadek samochodowy</Text>
                    </View>
                    <View style={styles.optiones}>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>cabin crew</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>bus-driver</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>car accident</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>car park</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tittle}>
                        <Text style={styles.word}>Złapać samolot</Text>
                    </View>
                    <View style={styles.optiones}>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>catch a flight</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>catch a taxi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>change trains</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={styles.option}>bus stop</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.next}>
                        <TouchableOpacity onPress={() => navigation.navigate("Result")} style={styles.button}>
                            <Text style={styles.buttonText}>SPRAWDŹ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );

}

export default MotoBegginer;

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
        borderRadius: 12,
        alignItems: 'center',
    },
    option: {
        fontSize: 20,
        fontWeight: '300',
        color: 'white',

    },
    goodAnswer: {
        backgroundColor: 'red',
    },
    test: {
        fontSize: 20,
        fontWeight: '300',
        color: 'white',
        paddingVertical: 12,
        marginVertical: 6,
        textAlign: 'center',
    }
});