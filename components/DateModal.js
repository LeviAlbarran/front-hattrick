import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from "react-native-modal";

class DateModal extends React.Component {
 state = {visible:  this.props.isVisible}
  render() {
    return (
      <Modal isVisible={this.state.visible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <TouchableOpacity onPress={this.state.visible= false}>
            <Text>Hide me!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}


export default DateModal;



