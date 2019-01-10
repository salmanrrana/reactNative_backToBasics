import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Card, Button, ListItem } from "react-native-elements";
import Deck from "./src/Deck";

const DATA = [
  {
    id: 1,
    rewards: "20 points/gal",
    action: "Buy fuel, any grade",
    uri:
      "https://s3.amazonaws.com/ebaumsworld.prod/uploads1515200745302-gas+station+pump_1467845020263_3784494_ver1.0.jpg"
  },
  {
    id: 2,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri:
      "https://target.scene7.com/is/image/Target/GUEST_f3dfc07b-ecf3-4db4-bb56-a1be8b754215?wid=488&hei=488&fmt=pjpeg"
  },
  {
    id: 3,
    rewards: "400 points",
    action: "Buy 1 Extra Gum",
    specifics: "15 pieces, any flavor",
    uri:
      "https://www.sandytoesandpopsicles.com/wp-content/uploads/2014/11/extra-sugarless-gum.jpg"
  },
  {
    id: 4,
    rewards: "200 points",
    action: "Buy 1 Cheez-it Baked Snack Crackers",
    specifics: "3 oz., any variety",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 9,
    rewards: "20 points/gal",
    action: "Buy fuel, any grade",
    uri:
      "https://s3.amazonaws.com/ebaumsworld.prod/uploads1515200745302-gas+station+pump_1467845020263_3784494_ver1.0.jpg"
  },
  {
    id: 10,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri:
      "https://target.scene7.com/is/image/Target/GUEST_f3dfc07b-ecf3-4db4-bb56-a1be8b754215?wid=488&hei=488&fmt=pjpeg"
  },
  {
    id: 11,
    rewards: "400 points",
    action: "Buy 1 Extra Gum",
    specifics: "15 pieces, any flavor",
    uri:
      "https://www.sandytoesandpopsicles.com/wp-content/uploads/2014/11/extra-sugarless-gum.jpg"
  },
  {
    id: 12,
    rewards: "200 points",
    action: "Buy 1 Cheez-it Baked Snack Crackers",
    specifics: "3 oz., any variety",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 13,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 14,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 15,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 16,
    rewards: "400 points",
    action: "Buy 1 Coke or Diet Coke",
    specifics: "16.9 oz or 20 oz bottle",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card key={item.id}>
        <ListItem
          subtitle={
            <View style={styles.layout}>
              <Image source={{ uri: item.uri }} style={styles.image} />
              <View style={styles.rewardsInfo}>
                <Text style={styles.textRewards}>{item.rewards}</Text>
                <Text style={styles.when}>when you...</Text>
                <Text tyle={styles.textActions}>{item.action}</Text>
                <Text tyle={styles.textSpecifics}>{item.specifics}</Text>
              </View>
            </View>
          }
        />
      </Card>
    );
  }

  render() {
    return (
      <View>
        <View>
          <Text>Im The Header</Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <Deck data={DATA} renderCard={this.renderCard} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#344D61"
  },
  layout: {
    flexDirection: "row"
  },
  when: {
    fontStyle: "italic",
    color: "grey"
  },
  image: {
    height: 100,
    width: 100
  },
  rewardsInfo: {
    margin: 10,
    justifyContent: "space-around"
  },
  textRewards: {
    color: "#2F6CA5",
    fontSize: 25,
    fontWeight: "bold"
  },
  textSpecifics: {
    fontWeight: "100"
  }
});
