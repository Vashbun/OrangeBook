import React from 'react';
import { View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useBooks } from '../contexts/BookContext';

export default function AddBookScreen() {
  const { addBook } = useBooks();

  const pickBook = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: [
        'application/epub+zip',
        'application/pdf',
        'application/x-mobipocket-ebook',
        'application/vnd.amazon.ebook'
      ]
    });

    if (res.type === 'success') {
      addBook({ title: res.name, uri: res.uri, author: 'Desconocido' });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Agregar libro" onPress={pickBook} />
    </View>
  );
}
