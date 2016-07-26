import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'; 

class Title extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  }
  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title || ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  }
});

export default Title;
