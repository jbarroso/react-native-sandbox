import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');

const images = [
  require('../../img/1.jpg'),
  require('../../img/2.jpg'),
  require('../../img/3.jpg'),
  require('../../img/4.jpg'),
  require('../../img/5.jpg'),
];

class SwiperImage extends Component {
  render() {
    return (
      <View style={styles.slide}>
        <Image style={styles.backdrop} source={images[this.props.image]} >
          <View style={styles.backdropView}>
            <Text style={styles.text}>Slide {this.props.image}</Text>
          </View>
        </Image>
      </View>
    );
  }
}

class SwiperExample extends Component {
  render() {
    let images = [];
    for (let i=0; i < 5; i++) {
      images.push(<SwiperImage key={i} image={i}/>);
    }
    return (
      <Swiper style={styles.wrapper} showsButtons={false} 
        loop={false} showsPagination={false}>
        {images}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 60,
    width: width,
    height: height 
  },
  backdropView: {
    margin: 50,
    height: 50,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth:1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

export default SwiperExample;
