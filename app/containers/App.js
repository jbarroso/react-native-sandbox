import { StyleSheet, View, Platform, Navigator, TouchableHighlight, Text} from 'react-native';
import React, { Component } from 'react';
import Home from '../views/Home';
import Menu from '../components/Menu';
import SideMenu from 'react-native-side-menu';
import NavigationBar from '../components/NavigationBar/NavigationBar';

class App extends Component {

  state = {
    isSideMenuOpen: false
  }

  toggleSideMenu() {
    this.setState({
      isSideMenuOpen: !this.state.isSideMenuOpen,
    });
  }

  updateSideMenuState(isSideMenuOpen) {
    this.setState({ isSideMenuOpen });
  }

  _onSideMenuPress = (title, component, extraProps) => {
    // Close menu
    //this.props.closeSideMenu();
    this.updateSideMenuState(false);

    extraProps = extraProps || {};

    //if(AppUtil.objIsEmpty(extraProps)) extraProps = {};

    this.refs.rootNavigator.replace({
      title: title,
      component: component,
      index: 0,
      ...extraProps
    });
  }

  _onSideMenuChange = (isSideMenuOpen) => {
    if (isSideMenuOpen != this.state.isSideMenuOpen) {
      this.toggleSideMenu();
    }
  }

  _renderScene = (route, navigator) => {
    return (
      <View style={styles.container}>
        <route.component navigator={navigator} 
          route={route} {...route.passProps} />
      </View>
    );
  }

  render() {
    return (
      <SideMenu
        ref="rootSidebarMenu"
        menu={<Menu navigate={this._onSideMenuPress} ref="rootSidebarMenu" />}
        isOpen={this.state.isSideMenuOpen}
        onChange={this._onSideMenuChange}>
        <Navigator 
          style={[styles.container, styles.appContainer]}
          ref="rootNavigator"
          renderScene={this._renderScene}
          configureScene={function(route, routeStack) {
            if(route.transition == 'FloatFromBottom') 
              return Navigator.SceneConfigs.FloatFromBottom;
            else
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          navigationBar={NavigationBar.getNavigationBar(this.toggleSideMenu.bind(this))}
          initialRoute={{
            component: Home,
            title: 'Home',
            index: 0,
            navigator: this.refs.rootNavigator,
            passProps: {
              showSplashScreen: true,
            }
          }} />
      </SideMenu>
    );
  }
}

let styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  nav: {
    flex: 1,
  }
});

export default App;
