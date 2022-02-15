import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';

const MotoExpert = ({navigation}) => {

    return (
        <ScrollView>
            <View style = {styles.containers}>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Zwiedzić katedrę</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>seaside</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>see sb off</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>see an exhibition</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>see a cathedral</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Biuro informacji turystycznej</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>summer holidays</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>tourist information office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>tourist destination</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>three-star hotel</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Wycieczka piesza</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>walking tour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>windsurf</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>winter holidays</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>wonderful views</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.tittle}>
                    <Text style = {styles.word}>Podróże kształcą</Text>
                </View>
                <View style = {styles.optiones}>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>travel by plane</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>travel by air</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>travel broadens the mind</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonOption}>
                        <Text style = {styles.option}>travel by sea</Text>
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

export default MotoExpert;

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