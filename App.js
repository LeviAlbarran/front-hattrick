import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Wall  from './screens/Wall';
import Fields  from './screens/Fields';
import Tournaments from './screens/Tournaments';
import Friendly from './screens/Friendly';
import Profile from './screens/Profile';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Wall: {
    screen: Wall,
    navigationOptions: {
      tabBarLabel:'MURO',
      tabBarIcon: ({tintColor})=>(
        <Icon name='ios-home-outline' color={tintColor} size={28}/>
      )
    }
  },
  Fields: {
    screen: Fields,
    navigationOptions: {
      tabBarLabel:'CANCHAS',
      tabBarIcon: ({tintColor})=>(
        <Icon name='ios-search' color={tintColor} size={28}/>
      ) 
    }
  },
  Tournaments:{
    screen: Tournaments, 
    navigationOptions: {
      tabBarLabel:'TORNEOS',
      tabBarIcon: ({tintColor})=>(
        <Icon name='ios-trophy-outline' color={tintColor} size={28}/>
      )
    }
  },
  Friendly: {
    screen: Friendly,
    navigationOptions: {
      tabBarLabel:'AMISTOSOS',
      tabBarIcon: ({tintColor})=>(
        <Icon name='ios-stopwatch-outline' color={tintColor} size={28}/>
      )
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions: {
      tabBarLabel:'PERFIL',
      tabBarIcon: ({tintColor})=>(
        <Icon name='ios-person-outline' color={tintColor} size={28}/>
      )
    }
  }
    
},
{
  tabBarOptions: {
    activeTintColor: '#1dbb38',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
