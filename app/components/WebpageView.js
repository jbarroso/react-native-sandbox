import React, { Component } from 'react';
import {StyleSheet, WebView, View} from 'react-native';

class WebpageView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: this.props.url}}
          javaScriptEnabled={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  }
});

export default WebpageView;
