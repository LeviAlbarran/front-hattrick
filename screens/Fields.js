import React from 'react';
import { StyleSheet, View,  ScrollView } from 'react-native';
import Card from '../components/Card';


class Fields extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            dataFields.map((item, index) =>(
              <Card key = {item.id} data={item} />
            ))
          }
        </ScrollView>      
      </View>
    ); 
  }
}

export default Fields;


const dataFields = 
[{
  id: 1,
  title: 'CLUB PALESTINO',
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
    title: 'LAS CANCHITAS',
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
    ]}
  


];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
