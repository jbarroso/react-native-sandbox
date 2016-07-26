import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Linking, WebView } from 'react-native';

class LinkExample extends Component {

	_goToUrl(url) {
		Linking.openURL(url).catch(err => console.error('An error occurred', err));
	}

	_navigateToUrl(url) {
		this.props.navigator.push({
			component: MyWebView,
			url
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={() => this._goToUrl('http://www.delolindo.com') } style={ styles.button }>
					<Text>Linking in browser</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this._navigateToUrl('http://www.delolindo.com') } style={ styles.button }>
					<Text>Navigate to Webview</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

class MyWebView extends Component {

	render() {
		return (
			<WebView
				source={{uri: this.props.url}}
				style={{marginTop: 20}}
			/>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60
	},
	text: {
		fontSize:20
	},
	button: {
		backgroundColor: '#efefef',
		height:50,
		justifyContent: 'center',
		alignItems: 'center',
		margin:10
	}

});

export default LinkExample;
