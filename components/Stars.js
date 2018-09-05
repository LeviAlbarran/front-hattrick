import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stars from 'react-native-stars'

class Starts extends React.Component {
  render() {
    return (
        <View style={{alignItems: 'flex-start', marginBottom: 30}}>
        <Stars
            value={3.67}
            spacing={3}
            count={5}
            starSize={12}
            backingColor='cornsilk'
            fullStar= {require('../images/star-green.png')}
            emptyStar= {require('../images/start-opacity.png')}/>
        </View>
    );
  }
}
export default Starts;

