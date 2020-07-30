import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import Screen from '../components/Screen';

const listings = [
  {
    id: 1,
    title: 'MacBook Pro in Brilliant Condition',
    price: 750,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: '4 Seat Sofa looks good',
    price: 400,
    image: require('../assets/couch.jpg'),
  },
  {
    id: 3,
    title: 'Beds just 3 months old',
    price: 250,
    image: require('../assets/bed.jpg'),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
