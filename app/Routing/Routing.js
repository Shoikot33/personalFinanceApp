import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../View/Home';
import Category from '../View/Category';

const Drawer = createDrawerNavigator();

export default class Routing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={Home} initialRoute />
                    <Drawer.Screen name="Category" component={Category} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
