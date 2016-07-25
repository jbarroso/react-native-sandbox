import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

class SwipperExample extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Slide1</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Slide2</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Slide3</Text>
        </View>
      </Swiper>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default SwipperExample;
