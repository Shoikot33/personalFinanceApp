import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../View/Home';
import Category from '../View/Category';
import AllExpenses from '../View/AllExpenses';

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
                    <Drawer.Screen
                        name="Home"
                        component={Home}
                        initialRoute
                        options={{
                            headerShown: false
                        }}
                    />
                    <Drawer.Screen name="Category" component={Category} />
                    <Drawer.Screen name="AllExpenses" component={AllExpenses} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
