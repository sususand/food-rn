//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

// create a component
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Feather name="search" size={24} color="black"
                style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 5,
        backgroundColor: '#F0EEEE',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        marginHorizontal: 15,
        fontSize: 35
    }
});

//make this component available to the app
export default SearchBar;
