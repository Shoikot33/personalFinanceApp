import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Button, Headline, Appbar, List, TextInput, RadioButton, Title, Snackbar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import Backend from "../component/Model/Backend";
import AsyncStorage from '@react-native-async-storage/async-storage';


var _ = require('lodash');

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            amount: "",
            date: new Date(),
            showDatePicker: false,
            category: [
                {
                    categoryName: 'Food',
                    id: 1
                },
                {
                    categoryName: 'Home',
                    id: 2
                },
                {
                    categoryName: 'Bill',
                    id: 3
                },
                {
                    categoryName: 'Travel',
                    id: 4
                },
            ],
            categorySelected: 1,
            prevTransactions: [],
            snackbarVisibility:false,
        };
    }

    componentDidMount() {
        this.getDataFromStore();

    }

    getDataFromStore = async () => {
        try {
            let transactions = await AsyncStorage.getItem('transactions');
            let prevTransaction = this.state.prevTransactions;
            if (transactions != null) {
                prevTransaction.push(JSON.parse(transactions));
                this.setState({
                    prevTransactions: prevTransaction
                })
            }
            console.warn("prev Transaction:", prevTransaction);
        } catch (error) {
            throw error;
        }
    }

    clearTextInput = () => {
        this.setState({
            title: '',
            amount: '',
            snackbarVisibility:true

        })
    }

    onChangeDatePicker = (event, selectedDate) => {

        this.setState({
            date: selectedDate,
            showDatePicker: Platform.OS === 'ios' ? true : false,
        })
    }

    onChangeTitle = (text) => {
        this.setState({
            title: text
        })
    }
    onChangeAmount = (text) => {
        console.log(text);
        this.setState({
            amount: text
        })
    }
    checkWhichCategorySelected = (item) => {
        return this.state.categorySelected == item ? true : false;;
    }

    onPressAddTransactionButton = () => {
        let prevProduct = this.state.prevTransactions;
        let returnvalue;
        let categoryId = this.state.categorySelected;
        let selectedCategory = _.find(this.state.category, function (locdata) { return locdata.id == categoryId; });
        { selectedCategory == undefined ? returnvalue = "0" : returnvalue = selectedCategory }
        let transaction = {
            title: this.state.title,
            amount: this.state.amount,
            date: this.state.date,
            category: selectedCategory,
            id: moment().format(),

        };

        if (prevProduct.length > 0) {
            prevProduct.push(transaction);
            Backend.setStoreProduct(prevProduct);
            this.clearTextInput();
        }
        else {
            Backend.setStoreProduct(transaction);
            this.clearTextInput();
        }


    }

    renerCategoryList = (item) => {
        return (
            <RadioButton.Group onValueChange={newValue => this.setState({ categorySelected: newValue })} value={this.state.categorySelected}>
                <List.Item
                    title={item.categoryName}
                    right={() => <RadioButton value={item.id} />}
                    onPress={(newValue) => this.setState({ categorySelected: item.id })} />
            </RadioButton.Group>

        )
    }


    renderMenuBar = () => {
        return (
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => this.props.navigation.openDrawer()} />
                <Appbar.Content title="Product" />
                <Appbar.Action icon="plus" onPress={() => { }} />

            </Appbar.Header>
        );
    }

    render() {
        console.log(this.state.prevTransactions);
        return (
            <View style={{ flex: 1 }}>
                {this.renderMenuBar()}

                <Headline> Add New Product </Headline>
                <TextInput
                    mode="outlined"
                    label="Title"
                    style={{ width: "90%", marginLeft: 10 }}
                    // placeholder="Title"
                    value={this.state.title}
                    onChangeText={(text) => { this.onChangeTitle(text) }}
                />
                <TextInput
                    mode="outlined"
                    label="Amount"
                    style={{ width: "90%", marginLeft: 10, marginTop: 10 }}
                    // placeholder="Title"
                    value={this.state.amount}
                    onChangeText={(text) => { this.onChangeAmount(text) }}
                />

                <Button icon="calendar" mode="outlined" style={{ marginTop: 10, marginHorizontal: 15 }} onPress={() => this.setState({ showDatePicker: !this.state.showDatePicker })}>
                    PICK A DATE
                </Button>
                <Title style={{ marginTop: 10, marginLeft: 10 }}>Selected Date: {moment(this.state.date).format('MMMM Do YYYY')} </Title>

                {this.state.showDatePicker ?
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode={'date'}
                        is24Hour={false}
                        display={Platform.OS === 'ios' ? "spinner" : "default"}
                        onChange={(event, selectedDate) => this.onChangeDatePicker(event, selectedDate)}
                        maximumDate={new Date()}
                    />
                    :
                    null
                }
                <Title style={{ marginTop: 10, marginLeft: 10 }}>Select Category</Title>

                <FlatList
                    data={this.state.category}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renerCategoryList(item)}
                />

                <View style={{ marginTop: "2%", marginBottom: "8%", justifyContent: "flex-end", alignItems: "center" }}>
                    <Button icon="plus" mode="contained" onPress={() => this.onPressAddTransactionButton()}>
                        Add Transaction
                    </Button>
                </View>
                <Snackbar
                    visible={this.state.snackbarVisibility}
                    onDismiss={()=>this.setState({snackbarVisibility:false})}
                    action={{
                        label: 'OK',
                        onPress: () => {
                            // Do something
                            this.props.navigation.navigate('Home');
                        },
                    }}>
                    Transaction Has Been Added!
                </Snackbar>

            </View>
        );
    }
}
