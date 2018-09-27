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
      <View style={{paddingVertical: 15}}>
        <SwipeableParallaxCarousel
            data={data.images}
            navigation='true'
            navigationType='dots'     
        />
        <View style={{paddingHorizontal: 20}}>
          <Text style={{ marginVertical: 4, fontSize: 14, textAlign: "left", fontWeight: "700" }}>{data.name}</Text> 
          <Stars style={{textAlign: "left"}}/>         
        </View>
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


