import React, { Component } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Functions = {
    async setStoreProduct(param) {
        try {
            await AsyncStorage.setItem('transactions', JSON.stringify(param));
        } catch (error) {
            throw error
        }
    },

    async getProduct() {
        try {
            let jsonValue = await AsyncStorage.getItem('transactions');
            if(jsonValue==null){
                console.warn("Backend",jsonValue);
                return jsonValue;
            }
            else{
                console.warn("Backend2",jsonValue);
                return JSON.parse(jsonValue);
            }
            
        } catch (error) {
            throw error
        }
    },
};

export default Functions;