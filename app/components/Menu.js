import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Home from '../views/Home';
import SwiperExample1 from '../views/SwiperExample1';
import SwiperExample2 from '../views/SwiperExample2';
import SwiperExample3 from '../views/SwiperExample3';
import LinkExample from '../views/LinkExample';
import NavigatorExample from '../views/NavigatorExample';
import IntroExample from '../views/IntroExample';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menu: [
        {title: 'Home', component: Home},
        {title: 'Navigator Example', component: NavigatorExample},
        {title: 'Swiper Example1', component: SwiperExample1},
        {title: 'Swiper Example2', component: SwiperExample2},
        {title: 'Swiper Example3', component: SwiperExample3},
        {title: 'Link Example', component: LinkExample},
        {title: 'Intro Example', component: IntroExample}
      ],
    };
  }

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  }

  render = () => {
    let { navigate } = this.props;
    let { menu } = this.state;

    let menuItems = [];
    menu.map((item)=>{
      let { title, component, props } = item;
      menuItems.push(
        <TouchableOpacity key={'menu-item-'+title}
          onPress={()=>navigate(title, component, props)}>
          <View style={[styles.menuItem]}>
            <Text style={[styles.menuItem_text]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.menuContainer]}>
        <View style={[styles.menu]}>{menuItems}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: "#111111",
  },
  menu: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: "#111111",
    padding: 20,
  },
  menuItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    lineHeight: parseInt(18 + (18 * 0.5)),
    fontWeight: '500',
    marginTop: 10,
    flex: 1,
    color: "#EEE"
  }
});

export default Menu
