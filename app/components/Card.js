import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 6,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default Card;
