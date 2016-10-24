import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

class AsyncStorageExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visits: 0,
      text: '',
    };
  }

  getValue(key, callback) {
    console.log("Getting value for " + key);
    this.setState({loading: true});
    AsyncStorage.getItem(key , (err, result) => {
      if (result) {
        let value = {};
        value[key] = result;
        this.setState(value);
      }
      this.setState({loading: false});
      if (callback) { 
        callback(); 
      }
    });
  }

  saveValue(key, value, callback) {
    console.log("Saving value for " + key);
    this.setState({loading: true});
    AsyncStorage.setItem(key, value.toString(), (err, result)=> {
      console.log("value saved!");
      this.setState({loading: false});
      if (callback) { 
        callback(); 
      }
    });
  }

  componentDidMount() {
    this.getValue('text');
    this.getValue('visits', () => {
      this.saveValue('visits', parseInt(this.state.visits) +1);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.progressContainer}>
          <ActivityIndicator color="#efefef" size="large"/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You have seen this demo {this.state.visits} times.
        </Text>

        <Text style={styles.welcome}>
          Last time you wrote:
        </Text>
        <TextInput
          ref={textInput => this.textInput = textInput}
          style={{
            width: 300,
            height: 48
          }}
          onChangeText={(text) => { this.setState({text: text}); }} 
          value={this.state.text} />
        <Text onPress={() => { this.saveValue('text', this.state.text); }}>Save</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  progressContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
});

export default AsyncStorageExample;
