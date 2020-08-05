import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import Text from './Text';
import colors from '../config/colors';

function Card({ title, subTitle, imageUrl, onPress, desc, thumbnailUrl }) {
  var descnew = desc.substring(0, 36) + '..';
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint='light'
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            {descnew}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: '600',
  },
  desc: {
    color: colors.dark,
    fontWeight: '100',
  },
  title: {
    marginBottom: 2,
    color: colors.dark,
    fontWeight: '800',
    fontSize: 24,
    textTransform: 'capitalize',
  },
});

export default Card;
