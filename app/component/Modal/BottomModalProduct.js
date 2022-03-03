import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';


let screenHeight = Dimensions.get("window").height;
let screenWidth = parseInt(Dimensions.get('window').width);
let modalHeightWithInput = Math.round(screenHeight * 0.228125);
let modalBorderRadius = parseInt(screenWidth * 0.045);

export default class BottomModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderModalContent = () => {
    return (
      <View style={WithInputStyle.modalView}>
        {/* <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        /> */}
        <Text>OK</Text>
      </View>
    )
  }

  render() {
    console.warn(modalHeightWithInput);
    return (
      <View style={WithInputStyle.mainContainer}>
        <Modal
        style={WithInputStyle.container}
        transparent={true}
        // backdropOpacity={Settings.modalBackdropOpacity}
        // onBackdropPress={this.props.closeIcon == true ? this.props.hideModalPrimary : () => { }}
        // onBackButtonPress={this.props.closeIcon == true ? this.props.hideModalPrimary : () => { }}
        isVisible={this.props.modalVisibility}
        hideModalContentWhileAnimating={true}
       useNativeDriver={Platform.OS != 'ios'}
      >
        {this.renderModalContent()}
      </Modal>
      </View>
    );
  }
}

const WithInputStyle = StyleSheet.create({
  mainContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
   // backgroundColor: "red"
  },
  container: {
    //justifyContent: "flex-end",
    margin: 0,
    backgroundColor: 'red'

  },
  modalContainer: {
    minHeight: modalHeightWithInput,
    maxHeight: "96%",
    backgroundColor: "#FFFFF",
    width: "100%",
    borderTopLeftRadius: modalBorderRadius,
    borderTopRightRadius: modalBorderRadius,
    margin:20
  },
  modalView:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})
