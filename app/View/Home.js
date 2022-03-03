import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button,Headline } from 'react-native-paper';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Headline>
          Total Expense
        </Headline>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    );
  }
}
