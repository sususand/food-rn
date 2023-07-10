//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp"
// create a component
const ResultShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState([])
    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getResult(id)
    })
    if (!result) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: item }} />
                }} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageStyle: {
        width: 250,
        height: 100
    }
});

//make this component available to the app
export default ResultShowScreen;
