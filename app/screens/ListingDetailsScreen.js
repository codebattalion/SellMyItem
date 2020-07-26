import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/laptop.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>MacBook pro for sale</AppText>
        <AppText style={styles.price}>$750</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/user.jpg')}
            title='Vipan Preet'
            subTitle='5 Listings '
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
