import React from 'react';
import {FlatList, Text, View, Image, Button, StyleSheet, Dimensions} from "react-native";


const listData  = [
    {
        key: '1',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    },
    {
        key: '2',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    },
    {
        key: '3',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    },
    {
        key: '4',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    },
    {
        key: '5',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    },
    {
        key: '6',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    },
    {
        key: '7',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    },
    {
        key: '8',
        data: 'Home for rent',
        pic: '../assets/HomeRent.png'
    }
];
// const renderItems = ({item}) => <Text>{item.key}</Text>;
const numColumns = 4;
export default class HomeScreenIcon extends React.Component{
    renderItems = ({item, index}) => {
        return (
            <Text style={styles.item}>{item.key}</Text>
        );
    };

    render(){
        return (
            <FlatList
                data={listData}
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
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        //flex: 1,
        margin: 1,
        width: Dimensions.get('window').width / numColumns,
        height: Dimensions.get('window').width / numColumns,
    }
})


