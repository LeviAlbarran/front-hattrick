import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Card, CardItem, Body, Thumbnail, Left, Right, Button, Badge } from 'native-base';

class CardWall extends React.Component {
  render() {
    return (
        <View style={{marginHorizontal: 0, borderWidth: 0, shadowColor: 'transparent'}}>
            <CardItem>
                <Left>
                    <Thumbnail 
                    source={require('../images/levi.jpg')} style={{width: 35, height: 35}}/>
                    <Body>
                        <Text style={{ fontWeight: "900" }}>
                            albarranlevi10
                            <Text>{" "}</Text>
                            <Text style={{color: 'red', fontSize: 9, marginLeft: 10}}>DC</Text>
                        </Text>           
                        <Text style={{fontSize:10}}>
                            15 Ene, 2018
                        </Text> 
                    </Body>
                </Left>
                <Right>  
                    <Image source={require('../images/applause-icon.png')} style={{ height: 35, width: 35}} />
                    <View style={{paddingHorizontal: 8, borderRadius: 10, paddingVertical: 1, backgroundColor: 'red', position: 'absolute', top: 25, right: 18}}><Text style={{color: '#ffffff', fontSize: 9}}>20</Text></View>          
                </Right>
            </CardItem>    
            <CardItem cardBody>
                <Image source={require('../images/leviPateando.png')} style={{ height: 190, width: null, flex: 1 }} />
            </CardItem>     
            <CardItem>
                <Body>
                    <Text>
                        <Text style={{ fontWeight: "900" }}>albarranlevi10 
                        <Text>{" "}</Text>
                        </Text>
                        Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui.
                    </Text>
                    <Text style={{fontSize: 12, color: 'grey', marginTop: 4
                }}>Ver los 45 comentarios</Text>
                </Body>
            </CardItem>

            <CardItem style={{flexDirection:'row', flexWrap:'wrap', paddingTop: 0}}>
                <Thumbnail source={require('../images/levi.jpg')} style={{width: 20, height: 20}}/>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Agregar un comentario"
                    placeholderTextColor="grey"
                    style={{fontWeight: '300', marginLeft: 10, fontSize: 12, flex: 1, backgroundColor: 'white', borderColor: 'white' }}
                />             
            </CardItem>
        </View>
    );
  }
}
export default CardWall;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 
