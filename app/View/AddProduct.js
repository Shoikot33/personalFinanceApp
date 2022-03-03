import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Headline, Appbar, Card, TextInput } from 'react-native-paper';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    onChangeTitle=(text)=>{
        this.setState({
            title: text
        })
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
        return (
            <View>
                {this.renderMenuBar()}
                <Headline> Add New Product </Headline>
                <TextInput
                    mode="outlined"
                    label="Title"
                    style={{width: "90%",marginLeft:10}}
                   // placeholder="Title"
                    value={this.state.title}
                    onChange={(text)=>{this.onChangeTitle(text)}}
                />
                <TextInput
                    mode="outlined"
                    label="Amount"
                    style={{width: "90%",marginLeft:10,marginTop:10}}
                   // placeholder="Title"
                    value={this.state.title}
                    onChange={(text)=>{this.onChangeTitle(text)}}
                />
            </View>
        );
    }
}
