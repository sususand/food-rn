//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultLists from '../components/ResultLists';

// create a component
const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san joe'
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        searchAPI('pasta')
        console.log(results)
    }, [])

    const filterResultByPrice = (price) => {
        //price===$,price ===$$ , price===$$$
        return results.filter(result => {
            return result.price === price;
        })
    }
    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermSubmit={() => searchAPI(term)}
                onTermChange={(newTerm) => {
                    setTerm(newTerm)
                }} />
            <Text>We have found {results.length} results.</Text>

            <ScrollView >
                <ResultLists results={filterResultByPrice('$')} title="Cost Effective" navigation={navigation} />
                <ResultLists results={filterResultByPrice('$$')} title="Big Pricer" navigation={navigation} />
                <ResultLists results={filterResultByPrice('$$$')} title="Big Spender" navigation={navigation} />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16
    },
});

//make this component available to the app
export default SearchScreen;
