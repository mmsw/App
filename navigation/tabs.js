import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import PostScreen from "../screens/PostScreen";
import FindScreen from "../screens/FindScreen";
import MyScreen from "../screens/MyScreen";

import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            tarBarOptions={{
                showIcon:true,
                showLabel:false,
                style: {
                    position: 'absolute',
                    width: 390,
                    height: 88,
                    left: 0,
                    top: 756,
                    background: '#13111E',
                    borderRadius: 15,
                }
            }}

        >
            <Tab.Screen name="Home" component={HomeScreen}
                 options={{
                      tabBarLabel: 'Home' ,
                      tabBarShowLabel: 'true',
                      headerShown: false,
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" size={32} color="green"/>
                      ),
                 }}
            />
            <Tab.Screen name="Find" component={FindScreen}
                options={{
                    tabBarLabel: 'Find',
                    tabBarIcon: ({ color, size }) => (
                          <AntDesign name="find" size={32} color="green"/>
                    ),
                }}
            />
            <Tab.Screen name="Post" component={PostScreen}
                 options={{
                      tabBarLabel: 'Post',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="message-text-outline" size={32} color="green" />
                      ),
                 }}
            />
            <Tab.Screen name="Chat" component={ChatScreen}
                 options={{
                      tabBarLabel: 'Find',
                      tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="message-text-outline" size={32} color="green" />
                      ),
                 }}
            />
            <Tab.Screen name="My" component={MyScreen}
                 options={{
                      tabBarLabel: 'Find',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="account-circle" size={32} color="green" />
                      ),
                 }}
            />
        </Tab.Navigator>
    )
}
export default Tabs;

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#13111E',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
