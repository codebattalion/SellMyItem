import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ListItem from './ListItem';
import Screen from './Screen';
import ListItemSeperator from './ListItemSeperator';
import ListItemDeleteAction from './ListItemDeleteAction';

const initMessages = [
  {
    id: 1,
    title: 'Title is one',
    description: 'Description is first',
    image: require('../assets/user.jpg'),
  },
  {
    id: 2,
    title: 'Title is two',
    description: 'Description is second',
    image: require('../assets/user.jpg'),
  },
  {
    id: 3,
    title: 'Title is three',
    description: 'Description is three',
    image: require('../assets/user.jpg'),
  },
];
const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete message
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initMessages);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
