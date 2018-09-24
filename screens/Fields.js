import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Dimensions, 
    Animated
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Card from '../components/Card'
import Tag from '../components/Tag'
import DateModal from '../components/DateModal'

const { height, width } = Dimensions.get('window')
class Fields extends Component {
    
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    openCalendar = () => {
        this.child.current.openCalendar();
    };

    componentWillMount() {
        this.ScrollY = new Animated.Value(0);
        this.startHeaderHeight = 100;
        this.endHeaderHeight = 50;
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
            this.endHeaderHeight = 50 + StatusBar.currentHeight;
        }

        this.animatedHeaderHeight = this.ScrollY.interpolate({
            inputRange: [0, 200],
            outputRange:[this.startHeaderHeight, this.endHeaderHeight],
            extrapolate:'clamp' 
        })

        this.animatedOpacity = this.ScrollY.interpolate({
            inputRange: [0, 200],
            outputRange:[1, 0],
            extrapolate:'clamp' 
        })

        this.animatedSearchTop = this.ScrollY.interpolate({
            inputRange: [0, 200],
            outputRange:[10, -20],
            extrapolate:'clamp' 

        })
        
        this.animatedTagTop = this.ScrollY.interpolate({
            inputRange: [0, 200],
            outputRange:[20, -35],
            extrapolate:'clamp' 
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <DateModal ref={this.child}>
                </DateModal>
                <Animated.View style={{ flex: 1 }}>
                    <Animated.View style={{height: this.animatedHeaderHeight, 
                        backgroundColor: 'white', 
                        borderBottomWidth: 1, 
                        borderBottomColor: '#dddddd' }}>
                        <Animated.View style={{
                            flexDirection: 'row', padding: 6,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            borderRadius
                            : 30,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null,
                            opacity: this.animatedOpacity,
                            top: this.animatedSearchTop
                        }}>
                            <Icon name="ios-search" size={20} style={{ paddingTop:4, marginLeft: 10, marginRight: 10}} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Escribe una calle o complejo deportivo"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '300', fontSize: 14, backgroundColor: 'white' }}
                            />

                        </Animated.View>
                        <Animated.View style={{
                        flexDirection: 'row', marginHorizontal: 20, 
                        position: 'relative',
                        top: this.animatedTagTop,
                        backgroundColor: 'white' ,
                        zIndex:999
                        }}>
                            <Tag name='Fecha' icon="md-calendar" onPress={this.openCalendar}/>
                            <Tag name='Filtros'  icon="md-options" onPress={this.openCalendar} style={{marginLeft: 10}}/>
                            <Tag name='Reservaciones' icon="ios-list-outline" onPress={this.openCalendar} style={{marginLeft: 10}}/>  
                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll= {Animated.event([
                            {nativeEvent: {contentOffset: {y: this.ScrollY}}

                            }]) }
                    >
                      <View style={{paddingHorizontal: 20, marginTop: 20}}>
                      {
                        dataFields.map((item, index) =>(
                          <Card key = {item.id} data={item} />
                        ))
                      }
                      </View>
                    </ScrollView>
                </Animated.View>
            </SafeAreaView>

        );
    }
}
export default Fields;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const dataFields = 
[{
  id: 1,
  name: 'CLUB PALESTINO',
  images: [
    {
        "id": 339964,
        "imagePath": "http://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_grun-3.jpg",
    },
    {
        "id": 315635,
        "imagePath": "http://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_grun-1.jpg",
    },
    {
        "id": 339403,
        "imagePath": "http://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_grunploteo-2.jpg",
    },
  ]},
  {
    id: 2,
    name: 'LAS CANCHITAS',
    images: [
      {
        "id": 315635,
        "imagePath": "http://www.maiclub.cl/wp-content/uploads/2015/12/malla-entrecancha-2-mts-de-alto-e1475963538154.jpg",
      },
      {
          "id": 339964,
          "imagePath": "http://www.maiclub.cl/wp-content/uploads/2015/12/arcos-4x2-e1475963361383.jpg",
      }
      
    ]},
    {
      id: 3,
      name: 'CLUB SANTIAGO',
      images: [
        {
          "id": 315635,
          "imagePath": "http://www.maiclub.cl/wp-content/uploads/2015/12/arcos-4x2-e1475963361383.jpg",
        },
        {
            "id": 339964,
            "imagePath": "http://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_grunploteo-2.jpg",
        }
        
      ]
    }
];
