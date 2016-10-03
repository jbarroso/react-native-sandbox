import React, { Component } from 'react';
import { StyleSheet, View, Navigator } from 'react-native';
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

  onSideMenuPress = (title, component, extraProps) => {
    this.updateSideMenuState(false);
    extraProps = extraProps || {};
    this.refs.rootNavigator.replace({
      title: title,
      component: component,
      index: 0,
      ...extraProps
    });
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
        menu={<Menu navigate={this.onSideMenuPress} ref="rootSidebarMenu" />}
        isOpen={this.state.isSideMenuOpen}
        onChange={(isSideMenuOpen) => this.updateSideMenuState}>
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

const styles = StyleSheet.create({
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
