import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import Stars from './Stars' 
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { data } = this.props;
    return (
      <View style={styles.card}>
        <SwipeableParallaxCarousel
            data={data.images}
            navigation='true'
            navigationType='dots'     
        />
        <Text style={{ marginHorizontal: 7, marginVertical: 4, fontSize: 20, textAlign: "left", fontWeight: "700" }}>CLUB PALESTINO</Text> 
        <Stars style={{textAlign: "left", marginHorizontal: 7}}/> 
        
      </View> 

    );
  }
}

export default Card;

const data = [
  {
      "id": 339964,
 //     "title": "Club Palestino",
      "imagePath": "http://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_grun-3.jpg",
  },
  {
      "id": 315635,
     // "title": "Club Palestino",
      "imagePath": "http://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_grun-1.jpg",
  },
  {
      "id": 339403,
   //   "title": "Club Palestino",
      //"subtitle": "More than just a trend",
      "imagePath": "http://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_grunploteo-2.jpg",
  }
];


const styles = StyleSheet.create({
  card: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
