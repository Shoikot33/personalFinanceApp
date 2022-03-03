import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Routing from './app/Routing/Routing';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Routing />
    );
  }
}
