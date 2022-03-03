import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Routing from './app/Routing/Routing';
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PaperProvider>
        <Routing />
      </PaperProvider>
    );
  }
}
