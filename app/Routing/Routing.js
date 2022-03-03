import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../View/Home';
import Category from '../View/Category';
import AllExpenses from '../View/AllExpenses';
import AddProduct from '../View/AddProduct';

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
                    <Drawer.Screen
                        name="Category"
                        component={Category}
                        options={{
                            headerShown: false
                        }} />
                    <Drawer.Screen
                        name="All Expenses"
                        component={AllExpenses}
                        options={{
                            headerShown: false
                        }} />
                        <Drawer.Screen
                        name="Add Product"
                        component={AddProduct}
                        options={{
                            headerShown: false
                        }} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
