import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Headline, Appbar, Card, FAB } from 'react-native-paper';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderMenuBar = () => {
    return (
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => this.props.navigation.openDrawer()} />
        <Appbar.Content title="Category" />
        <Appbar.Action icon="plus" onPress={() => { }} />

      </Appbar.Header>
    );
  }
  render() {
    return (
      <View>
        {this.renderMenuBar()}
        <Text> Category </Text>
      </View>
    );
  }
}
