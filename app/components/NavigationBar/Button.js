import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class Button extends Component {

  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    icon: React.PropTypes.string.isRequired,
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7} 
          style={styles.navbarButton}
          hitSlop={{top: 7, right: 7, bottom: 7, left: 7}}>
          <Icon name={this.props.icon} size={36} color={"#000000"} />
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Button;
