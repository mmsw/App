import React, {useState} from 'react';
import {FlatList, Text, View, Image, Button, StyleSheet, Dimensions} from "react-native";
// const renderItems = ({item}) => <Text>{item.key}</Text>;
const listData = [
    {
        key: '1',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    },
    {
        key: '2',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    },
    {
        key: '3',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    },
    {
        key: '4',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    },
    {
        key: '5',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    },
    {
        key: '6',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    },
    {
        key: '7',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    },
    {
        key: '8',
        data: 'Home rent',
        pic: require("../assets/HomeRent.png")
    }
];



const numColumns = 4;
export default class HomeScreenIcon extends React.Component{
    renderItems = ({item, index}) => {
        return (
            // <Text style={styles.item}>{item.key}</Text>
            <View >
                <Image
                    source={item.pic}
                    style={styles.item}
                />
                <Text style={styles.itemTitle}>{item.data}</Text>
            </View>
        );
    };

    render(){
        return (
            <FlatList
                data={listData}
                style={styles.container}
                renderItem={this.renderItems}
                numColumns={numColumns}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginVertical:20
    },
    item: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        width: Dimensions.get('window').width / numColumns - 15,
        height: Dimensions.get('window').width / numColumns - 15,
    },
    itemTitle: {
        color: 'blue',
        textAlign: 'center',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1
    }
})


