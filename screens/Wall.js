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
                  backgroundColor: '#ffffff',
                  borderBottomColor: '#dddddd',
                  borderBottomWidth: 1}}>
          <Left>
            <Icon name='ios-camera' size={25} style={{color: 'black'}}/>
          </Left>
          <Body style={{ alignItems: 'center'}}>
          </Body>
          <Right>
            <Icon name='ios-paper-plane' size={25} style={{color: 'black'}}/>
          </Right>
        </Header>
        
        <View style={{flexDirection: 'row', 
                    borderBottomColor: '#dddddd',
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                    justifyContent: 'flex-end' 
                  }}>
          <View style={{paddingHorizontal: 10, 
                        paddingVertical: 5, 
                        borderColor: 'green', 
                        borderWidth: 1}}>
            <Text style={{fontSize: 10, fontWeight: "900", color: 'green'}}>Seguidos</Text>
          </View>
          <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
              <Text style={{fontSize: 10, fontWeight: "900"}}>Comunidad</Text>
          </View>
        </View>
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
