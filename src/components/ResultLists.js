//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
// create a component
const ResultLists = ({ title, results, navigation }) => {
    if (!results) {
        return null;
    }
    return (
        <View>
            <Text style={styles.title}> {title} </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("ResultShow", { id: item.id })
                            console.log("pressed")
                        }
                        } >
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                }} />
        </View >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default withNavigation(ResultLists);
