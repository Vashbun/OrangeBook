import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, Button, TextInput } from 'react-native';
import { useBooks } from '../contexts/BookContext';

export default function ReaderScreen({ route }) {
  const { book } = route.params;
  const { markOpened } = useBooks();
  const [showMenu, setShowMenu] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  React.useEffect(() => {
    markOpened(book.id);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => setShowMenu(!showMenu)}>
      <View style={{ flex: 1, backgroundColor, padding: 10 }}>
        <Text style={{ fontSize }}>{book.title}</Text>
        <Text style={{ marginTop: 20, color: '#666' }}>Este es un visor simple de libros.</Text>
        <Modal visible={showMenu} transparent animationType="slide">
          <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', padding: 20 }}>
            <Text>Tamaño de fuente</Text>
            <TextInput
              value={String(fontSize)}
              onChangeText={(v) => setFontSize(Number(v) || 12)}
              keyboardType="numeric"
              style={{ borderWidth: 1, marginBottom: 10, padding: 4 }}
            />
            <Text>Color de fondo</Text>
            <TextInput value={backgroundColor} onChangeText={setBackgroundColor} style={{ borderWidth: 1, marginBottom: 10 }} />
            <Button title="Cerrar" onPress={() => setShowMenu(false)} />
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
