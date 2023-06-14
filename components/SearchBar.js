import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard, Button} from "react-native";
import {Entypo, Feather} from "@expo/vector-icons";


//const [searchPhrase, setSearchPhrase] = useState("");
//const [clicked, setClicked] = useState(false);

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Hello!</Text>
            </View>
            <View style={
                clicked
                  ? styles.searchBar__clicked
                  : styles.searchBar__unclicked
            } >
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                <TextInput
                    placeholder="Search"
                    style={styles.input}
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }}/>
                )}
            </View>
            {clicked && (
                <View>
                    <Button
                        title="Cacel"
                        onPress={()=>{
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    ></Button>
                </View>
            )}
        </View>
    )
}





export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    }
})

