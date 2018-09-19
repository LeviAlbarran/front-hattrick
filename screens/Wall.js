import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Content, Container, Header, Title, Card, CardItem, Segment, Body, Thumbnail, Left, Right, Button, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import  CardWall  from '../components/CardWall'

class Wall extends React.Component {
 
  componentWillMount() {
    this.headerPadding = 0;
    this.headerHeight = 30;
    if (Platform.OS == 'android') {
      this.headerPadding = 20;
      this.headerHeight = 60;
    }
  }
  render() {
    return (
      <Container>
        <Header style={{paddingTop: this.headerPadding, 
                  height: this.headerHeight, 
                  backgroundColor: '#ffffff'}}>
          <Left>
            <Icon name='ios-camera' size={25} style={{color: 'black'}}/>
          </Left>
          <Body style={{ alignItems: 'center'}}>
            <View 
            style={{backgroundColor: '#ffffff', height: 25, alignItems: 'center',
            justifyContent: 'center'}}>
              <View style={{  
                        flexDirection:'row',
                        }}>
                        
                <View style={{paddingHorizontal: 15, 
                  paddingVertical: 5, 
                  borderColor: '#dddddd', 
                  borderWidth: 1, 
                  backgroundColor: 'white', borderTopLeftRadius: 15, borderBottomLeftRadius: 15}}>
                  <Text style={{color: 'black', fontWeight: '900', fontSize: 10}}>Seguidos</Text>
                </View>
                <View style={{paddingHorizontal: 15,
                  paddingVertical: 5, 
                  borderColor: '#dddddd', 
                  borderLeftColor: 'white',
                  borderWidth: 1, 
                  backgroundColor: 'white', borderTopRightRadius: 15, borderBottomRightRadius: 15}}>
                  <Text style={{color: 'green', fontWeight: '900', fontSize: 10}}>Comunidad</Text>
                </View>
              </View>
          </View>


          </Body>
          <Right>
            <Icon name='ios-paper-plane' size={25} style={{color: 'black'}}/>
          </Right>
        </Header> 
        <Content> 
          <CardWall/>
          <CardWall/>
        </Content>
      </Container>
    );
  }
}

export default Wall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
