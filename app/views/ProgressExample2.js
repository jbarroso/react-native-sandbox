import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ProgressBarAndroid } from 'react-native';


class ProgressExample2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
			indeterminate: true,
		};
	}

	componentDidMount() {
		this.animate();
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	animate() {
		let self = this;
		let progress = 0;
		this.setState({ progress });
		setTimeout(() => {
			this.setState({ indeterminate: false });
			self.intervalId = setInterval(() => {
				progress += Math.random() / 5;
				if (progress > 1) {
					progress = 1;
				}
				this.setState({ progress });
			}, 500);
		}, 1500);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>ProgressBar</Text>
        <ProgressBarAndroid />

				<Text style={styles.welcome}>Horizontal ProgressBar</Text>
        <ProgressBarAndroid progress={this.state.progress} styleAttr="Horizontal" indeterminate={false} />

        <Text style={styles.welcome}>Blue ProgressBar</Text>
        <ProgressBarAndroid progress={this.state.progress} color="blue" />
      </View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: 20,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	circles: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	progress: {
		margin: 10,
	},
});

export default ProgressExample2;
