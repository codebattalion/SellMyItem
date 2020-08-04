import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import listingsAPI from '../api/listingsAPI';

import ActivityIndicator from '../components/ActivityIndicator';
import Card from '../components/Card';
import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/Text';
import Button from '../components/Button';

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getListing();
  }, []);

  const getListing = async () => {
    try {
      setIsLoading(true);
      const response = await listingsAPI.fetchLists();
      setError(false);
      setIsLoading(false);

      setListings(response.data);
    } catch (error) {
      if (!error.response || error.code === 'ECONNABORTED') {
        return setError(true);
      }
    }
  };
  return (
    <Screen style={styles.screen}>
      {error === true && (
        <>
          <AppText style={{ textAlign: 'center' }}>
            There is an problem with network
          </AppText>
          <Button title='Retry' onPress={getListing} />
        </>
      )}
      <ActivityIndicator visible={isLoading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing._id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
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
