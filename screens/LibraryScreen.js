import React from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import { useBooks } from '../contexts/BookContext';

export default function LibraryScreen({ navigation }) {
  const { books } = useBooks();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}
      onPress={() => navigation.navigate('Reader', { book: item })}
    >
      <Image
        source={item.coverUri ? { uri: item.coverUri } : require('../assets/icon.png')}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
      <View>
        <Text>{item.title}</Text>
        <Text style={{ color: '#666' }}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return <FlatList data={books} renderItem={renderItem} keyExtractor={(item) => String(item.id)} />;
}
