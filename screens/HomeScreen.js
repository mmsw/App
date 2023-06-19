import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, Image, ScrollView, ListView, FlatList} from 'react-native';
import SearchBar from "../components/SearchBar";
import HomeScreenIcon from "../components/HomeScreenIcon";
//import Recommendation from "../components/Recommendation";
//import SearchBar from 'react-native-elements';



const HomeScreen = ({navigation}) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);



    if (Platform.OS === 'ios'){
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    {!clicked}
                    <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}/>
                </SafeAreaView>
                <SafeAreaView>
                    <Image
                        source={require('../assets/discount.png')}
                    />

                </SafeAreaView>
                <HomeScreenIcon />
                <SafeAreaView>

                </SafeAreaView>

            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <View>
                    {!clicked}
                    <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}/>
                </View>
                <ScrollView>
                    <View>
                        <Image
                            source={require('../assets/discount.png')}
                        />
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: 'green'
    },
});

