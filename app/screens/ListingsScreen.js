import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'MacBook for Sale',
    price: 750,
    image: require('../assets/laptop.jpg'),
  },
  {
    id: 2,
    title: 'Sofa in good condition',
    price: 250,
    image: require('../assets/couch.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        key={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={'$' + item.price} image={item.image} />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
