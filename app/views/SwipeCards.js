import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

const images = [
	require('../../img/1.jpg'),
	require('../../img/2.jpg'),
	require('../../img/3.jpg'),
	require('../../img/4.jpg'),
	require('../../img/5.jpg'),
];

let CARD_REFRESH_LIMIT = 1

const Cards = [
	{name: '1', image: images[0]},
	{name: '2', image: images[1]},
	{name: '3', image: images[2]},
];

const Cards2 = [
	{name: '4', image: images[3]},
	{name: '5', image: images[4]},
];

class Card extends Component {
	render() {
		return (
			<View style={styles.card}>
				<Image style={styles.thumbnail} source={this.props.image} />
				<Text style={styles.text}>This is card {this.props.name}</Text>
			</View>
		)
	}
}

class NoMoreCards extends Component {
	render() {
		return (
			<View style={styles.noMoreCards}>
				<Text>No more cards</Text>
			</View>
		)
	}
}

class SwipeCardsView extends Component {

	constructor(props) {
		super(props);
		this.state={
			cards: Cards,
			outOfCards: false
		}
	}

	handleYup (card) {
		console.log("yup")
	}

	handleNope (card) {
		console.log("nope")
	}

	cardRemoved (index) {
		console.log("The index is " + index);
		if (this.state.cards.length - index <= CARD_REFRESH_LIMIT) {
			console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

			if (!this.state.outOfCards) {
				console.log(`Adding ${Cards2.length} more cards`)

				this.setState({
					cards: this.state.cards.concat(Cards2),
					outOfCards: true
				})
			}

		}

	}

	render() {
		return (
			<SwipeCards
				cards={this.state.cards}
				loop={false}
				renderCard={(cardData) => <Card {...cardData} />}
				renderNoMoreCards={() => <NoMoreCards />}
				showYup={true}
				showNope={true}
				handleYup={(card) => this.handleYup(card)}
				handleNope={(card) => this.handleNope(card)}
				cardRemoved={(card) => this.cardRemoved(card)}
			/>
		)
	}
}

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
		borderRadius: 5,
		overflow: 'hidden',
		borderColor: 'grey',
		backgroundColor: 'white',
		borderWidth: 1,
		elevation: 1,
	},
	thumbnail: {
		flex: 1,
		width: 300,
		height: 300,
	},
	text: {
		fontSize: 20,
		paddingTop: 10,
		paddingBottom: 10
	},
	noMoreCards: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default SwipeCardsView;
