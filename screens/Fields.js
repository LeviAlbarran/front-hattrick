import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Fields extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test!</Text>

      </View>
    );
  }
}

export default Fields;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
