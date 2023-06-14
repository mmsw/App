import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';

const MyScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>My Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
}

export default MyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13111E'
    },
});
