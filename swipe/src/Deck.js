import React, { Component } from "react";
import { View, Animated } from "react-native";

class Deck extends Component {
  renderCards() {
    return (
      // pass in list of data from parent component
      this.props.data.map(item => {
        // we pass in renderCard
        return this.props.renderCard(item);
        // deck will take list of data, and for every element in that array,
        // it will call render card
      })
    );
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
