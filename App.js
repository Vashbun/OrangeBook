import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookProvider } from './contexts/BookContext';
import LibraryScreen from './screens/LibraryScreen';
import AddBookScreen from './screens/AddBookScreen';
import ReaderScreen from './screens/ReaderScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Library" component={LibraryScreen} options={{ title: 'Biblioteca' }} />
      <Stack.Screen name="Reader" component={ReaderScreen} options={{ title: 'Lector' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <BookProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Library">
          <Drawer.Screen name="LibraryStack" component={LibraryStack} options={{ title: 'Biblioteca' }} />
          <Drawer.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Agregar libro' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
}
