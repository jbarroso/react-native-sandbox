import React, { Component } from 'react';
import {StyleSheet, Navigator} from 'react-native';
import Button from './Button';
import Title from './Title';

let getNavigationBar = (toggleSideMenu) => {
  let routeMapper = {
    LeftButton(route, navigator, index, navState) {
      let leftButton = {
        onPress: (route.index > 0) ? 
          navigator.pop : toggleSideMenu,
          icon: (route.index > 0) ? 
          'ios-arrow-back-outline' : 'ios-menu-outline'
      };
      // Show a cross icon when transition pops from bottom
      if(route.transition == 'FloatFromBottom')  {
        leftButton.icon = 'ios-close-outline';
      }
      return <Button onPress={leftButton.onPress} icon={leftButton.icon} />
    },
    RightButton(route, navigator, index, navState) {
      if (route.onPress) {
        return (
          <Button onPress={rightButton.onPress} icon={rightButton.icon} />
        );
      }
    },
    Title(route, navigator, index, navState) {
      return <Title title={route.title || null} />
    }
  };
  return (
    <Navigator.NavigationBar style={styles.navigationBar} routeMapper={routeMapper} />
  );
};

let styles = StyleSheet.create({
  navigationBar: {
    flex: 1,
  }
});

export default {getNavigationBar};

