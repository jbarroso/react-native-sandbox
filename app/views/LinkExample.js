import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Linking} from 'react-native';
import WebpageView from '../components/WebpageView';

class LinkExample extends Component {

	goToUrl(url) {
		Linking.openURL(url).catch(err => console.error('An error occurred', err));
	}

	navigateToUrl(url) {
		this.props.navigator.push({
			component: WebpageView,
			passProps: {
				url
			}
		})
	}

	render() {
		const url = 'http://delolindogames.com';
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={() => this.goToUrl(url) } style={ styles.button }>
					<Text>Linking in browser</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.navigateToUrl(url) } style={ styles.button }>
					<Text>Navigate to Webview</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
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
