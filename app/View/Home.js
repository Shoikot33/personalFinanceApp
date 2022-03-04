import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Headline, Appbar, Card, FAB } from 'react-native-paper';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpense: 0,
      modalVisibility: false,
    };
  }

  renderMenuBar = () => {
    return (
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => this.props.navigation.openDrawer()} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="plus" onPress={() => { }} />

      </Appbar.Header>
    );
  }

  render() {
    return (
      <View style={homeStyle.container}>
        {this.renderMenuBar()}
        <Headline style={homeStyle.headerContainer}>
          Total Expense
        </Headline>
        <Card elevation={2} style={{width: "70%",alignSelf: 'center'}}>
          <Card.Title title={"$" + this.state.totalExpense} />
        </Card>
        {/* <Button icon="camera" mode="contained" onPress={() => this.props.navigation.openDrawer()}>
          Press me
        </Button> */}
        <FAB
          style={homeStyle.fab}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
        {/* <BottomModalProduct modalVisibility={this.state.modalVisibility}/> */}
      </View>
    );
  }
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 10,
    fontWeight: "bold",
    alignSelf: "center",

  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
