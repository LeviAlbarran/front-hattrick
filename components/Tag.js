import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class Tag extends React.Component {

  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity
      onPress={() => onPress()}
      style={{ minHeight: 20, minWidth: 40, paddingVertical: 5,
      paddingHorizontal: 20, 
      backgroundColor: 'white', 
      borderColor: '#dddddd', 
      borderRadius: 30,
      borderWidth: 1,
      flexDirection: 'row'
      }}>

        <Icon name={this.props.icon} style={{marginRight:4, paddingTop: 1}}/>
        <Text style={{fontSize: 10, fontWeight: '700'}}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}
export default Tag;
