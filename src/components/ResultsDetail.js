//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.reviewTextStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 8
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    nameStyle: {
        fontWeight: 'bold',
    },
    reviewTextStyle: {
    }
});

//make this component available to the app
export default ResultsDetail;
