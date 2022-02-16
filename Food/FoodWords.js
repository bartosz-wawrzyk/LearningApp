import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';

const FoodWords = ({navigation}) => {
    let listViewRef;
    const [dataSource, setDataSource] = useState([
        { translate: "Nie piję alkoholu.", title: 'I do not drink alcohol.' },
        { translate: "czerwone mięso", title: 'red meat' },
        { translate: "odtłuszczone mleko", title: 'skimmed milk' },
        { translate: "Poproszę pół porcji.", title: 'A half portion, please.' },
        { translate: "Jak duża jest porcja?", title: 'How big is a portion?' },
        { translate: "napój w cenie", title: 'drink included' },
        { translate: "sałatki", title: 'salads' },
        { translate: "śledź", title: 'herring' },
        { translate: "krewetki", title: 'prawns' },
        { translate: "pulpet", title: 'meatball' },
    ]);

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.title.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.8,
                    width: '100%',
                    backgroundColor: '#228B22',
                }}
            />
        );
    };

    const getItem = (item) => {
        alert(item.translate);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style = {styles.firstText}>Jedzenie</Text>
            <FlatList
                data={dataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                ref={(ref) => {
                    listViewRef = ref;
                }}
            />
            <View style={styles.next}>
                <TouchableOpacity onPress={() => navigation.navigate("FoodHome")} style={styles.button}>
                    <Text style={styles.returnText}>Cofnij</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    itemStyle: {
        padding: 20,
        fontSize: 15,
        backgroundColor: '#228B22',
        borderRadius: 16,
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        color: 'white',
    },
    firstText: {
        marginTop: 35,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 12,
    },
    next: {
        paddingVertical: 8,
        justifyContent:'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    returnText: {
        fontSize: 18,
        fontWeight: '200',
        color: 'white',
    },
    button: {
        padding: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 2,
        width: '60%',
        backgroundColor: "#006400",
        marginLeft: 70,
    },
});

export default FoodWords;