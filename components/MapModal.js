import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Dimensions, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class MapModal extends Component {

    constructor (props) {
        super(props)
        this.state = {
            modalVisible: false,
            region: {
                latitude:  null,
                latitudeDelta: null,
                longitudeDelta: null,
                longitude: null
            }
        };
       

        this.setModalVisible = this.setModalVisible.bind(this);
    };
    

    setLocation(lat, long, accuracy){
        this.setState({
            region: {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
        });
    };

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                const accuracy = position.coords.accuracy;
                this.setLocation(lat, long, accuracy);
            });
    };


    setModalVisible() {
        this.setState({modalVisible: !this.state.modalVisible});
    };

    markerMyLocation(){
        return {
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude
        }
    }

    render() {
        return (
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}>

                <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible();
                    }}>
                    <Text>X</Text>
                    
                </TouchableHighlight>
                {this.state.region.latitude ? 
                <MapView style={styles.map}
                initialRegion={this.state.region}>
                    <MapView.Marker 
                        coordinate={this.markerMyLocation()}
                        title="Aqui Estamos"
                        description ="Nuestro hogar"
                        />
                </MapView>
                 : null}
            </Modal>
        );
    }
};

export default MapModal;

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: width    
    }

});